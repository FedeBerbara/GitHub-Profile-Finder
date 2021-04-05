export const searchProfile = async (profileName) => {

    const URI = `https://api.github.com/users/${profileName}`;

    const options = {
        headers: {
            "Accept" : "application/vnd.github.v3+json"
        },
    };

    try {
        const response = await fetch(URI, options);

        if (response.ok) {
            console.log(response);
            return await response.json();
        }
        
    } catch (error) {
        console.error("Something went wrong, try again", error)
    }
}