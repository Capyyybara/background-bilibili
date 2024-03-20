class Result {
    public status: string;
    public data: object | null;
    public msg: string;
    constructor(status: boolean, data: object | null, msg: string) {
        this.status = status ? "success" : "fail";
        this.data = data;
        this.msg = msg;
    }
}

export default Result;