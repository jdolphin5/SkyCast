import bcrypt from "bcrypt";

export const saltAndHash = async (
    password: string,
    saltRounds: number
): Promise<string> => {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);

        console.log("hashed pw", hash);

        return hash;
    } catch (err) {
        console.log("Error generating salt or hashing password", err);
        return "";
    }
};
