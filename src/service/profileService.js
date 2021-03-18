export const searchProfile = async (profileData) => {

    const URI = `https://api.github.com/users/${profileData}`;

    try {
        const data = await fetch(URI);
        
        if (data.ok) {
            const response = await data.json();
            console.log(response);

        }
        
    } catch (error) {
        console.error("Something went wrong, try again", error)
    }
}