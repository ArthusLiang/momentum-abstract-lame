const regArgs = /^([^\=]+)\=([^\=]+)$/;
const getProcessArgs = () => {
    const args = process.argv.slice(2);
    const ret = {};
    args.forEach((str)=>{
        const result = str.match(regArgs);
        if(result && typeof result.length === 'number' && result.length===3) {
            ret[result[1]] = result[2];
        }
    });
    return ret;
}

const args = getProcessArgs();

console.log(args);