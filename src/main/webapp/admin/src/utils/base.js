const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmdls35/",
            name: "ssmdls35",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmdls35/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的自习室预约系统"
        } 
    }
}
export default base
