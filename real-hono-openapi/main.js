import { DefaultService } from './generated/services/DefaultService';
async function main() {
    const res = await DefaultService.getUsers("234");
    // console.log("SOmeting")
}
main();
