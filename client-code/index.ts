import { DefaultService } from "./generated/services/DefaultService";

const main = async() => {
    const res = await DefaultService.getUsers("2342");

    console.log("res:- ", res);
}

main()