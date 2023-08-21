
// 获取列表数据
const getList = (author='', keyword='') => {
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1692606985029,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 16926069852323,
            author: '法外狂徒'
        }
    ]
}

module.exports = {
    getList
}