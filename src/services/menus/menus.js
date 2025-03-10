import uploadFileService from "../uploadFileService";

export const getMenuByIdService = async (menuId) => {
    try {
        const token = localStorage.getItem("token")

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Chef/GetMenuById?MenuId=${menuId}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        const data = await res.json();

        return data;
    } catch (err) {
        console.log("Failed to get Menu by ID.");
        console.log(err);
    }
}

export const getAllMenusService = async (page = 1, pageSize = 10) => {
    try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Chef/ChefMenu?page=${page}&pageSize=${pageSize}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        )

        const data = await res.json();

        return data
    } catch (err) {
        console.log("Failed to get all Menus.");
        console.log(err);
    }
}


export const addMenuService = async (menu) => {
    try {
        const token = localStorage.getItem("token");

        // create a copy of menu so that I don't remove the image from the original menu object
        const menuToUpload = JSON.parse(JSON.stringify(menu));

        // upload images of the menu first
        for (let i = 0; i < menu.courses.length; i++) {
            if (!menu.courses[i].image) {
                menu.courses[i].image = "";
                continue;
            }

            const course = menu.courses[i];
            const formData = new FormData();
            formData.append('file', course.image);

            const res = await uploadFileService(course.image);

            console.log(res);

            menuToUpload.courses[i].image = res.data;
        }

        // upload the menu itself
        const res = await fetch(`${process.env.REACT_APP_API_URL}/Chef/AddChefMenu`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    menuName: menuToUpload.name,
                    description: menuToUpload.description,
                    dishes: menuToUpload.courses.map(course => {
                        return {
                            cuisineName: course.name,
                            description: course.description,
                            dishesImage: course.image
                        }
                    })
                })
            }
        )

        const data = await res.json();

        return data
    } catch (err) {
        console.log("Failed to create Menu.");
        console.log(err);
    }
}




export const updateMenu = async (newMenu) => {
    try {
        const token = localStorage.getItem("token");

        // create a copy of menu so that I don't remove the image from the original menu object
        const menuToUpload = JSON.parse(JSON.stringify(newMenu));

        console.log(newMenu);

        /**
         * the menu object has courses, and each course has an image
         * if the image is a file, this means that the image has been changed
         * so we need to upload the new image and get the url of the new image
         * and update the image url in the menu object
         * 
         * if the image is a string, this means that the image has not been changed
         * so we don't need to upload the image again.
         */


        // upload images of the menu first
        for (let i = 0; i < newMenu.courses.length; i++) {

            // The user hasn't uploaded image to the Course
            if (!newMenu.courses[i].image) {
                newMenu.courses[i].image = "";
                continue;
            }

            // if the image is a string, this means that the image has not been changed
            if (typeof newMenu.courses[i].image === "string") {
                continue;
            }

            const course = newMenu.courses[i];
            const formData = new FormData();
            formData.append('file', course.image);

            const res = await uploadFileService(course.image);

            console.log(res);

            menuToUpload.courses[i].image = res.data;
        }

        // upload the menu itself
        const res = await fetch(`${process.env.REACT_APP_API_URL}/Chef/UpdateChefMenu`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    id: menuToUpload.id,
                    usersId: menuToUpload.usersId,
                    menuName: menuToUpload.name,
                    description: menuToUpload.description,
                    dishes: menuToUpload.courses.map(course => {
                        return {
                            id: course.id,
                            cuisineName: course.name,
                            description: course.description,
                            dishesImage: course.image
                        }
                    })
                })
            }
        )

        const data = await res.json();

        console.log(data);

        return data
    } catch (err) {
        console.log("Failed to update Menu");
        console.log(err);

    }
}



export const getMyMenu = async () => {
    try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${process.env.REACT_APP_API_URL}/Chef/GetMyMenus`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        )

        const data = await res.json();

        return data
    } catch (err) {
        console.log("Failed to get all Menus.");
        console.log(err);
    }
}
