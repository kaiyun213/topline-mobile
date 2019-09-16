//封装token数据的操作

//定义键
const Author_key = 'user'

//数据的保存
function setAuthor(value) {
    window.localStorage.setItem(Author_key, JSON.stringify(value))
}
//数据的获取
function getAuthor() {
    // return window.localStorage.getItem(Author_key) ? JSON.parse(window.localStorage.getItem(Author_key)) : null
    return window.localStorage.getItem(Author_key)
        ? JSON.parse(window.localStorage.getItem(Author_key))
        : null;
}
//数据的删除
function removeAuthor() {
    window.localStorage.removeItem(Author_key)
}


//暴露接口
export { setAuthor, getAuthor, removeAuthor }