const handleBlogRouter = (req, res) => {
    // 请求类型(get、post)
    const method = req.method;

    // 获取博客列表
    if (method === 'GET' && req.path === '/api/blog/list') {
        return {
            msg: '这是获取博客列表'
        }
    }

    // 获取博客详情
    if (method === 'GET' && req.path === '/api/blog/detail') {
        return {
            msg: '博客详情接口'
        }
    }

    // 新增博客
    if (method === 'POST' && req.path === '/api/blog/new') {
        return {
            msg: '新增博客接口'
        }
    }

    // 编辑博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        return {
            msg: '更新博客接口'
        }
    }

    // 删除博客
    if (method === 'POST' && req.path === '/api/blog/del' ) {
        return {
            msg: '删除博客接口'
        }
    }
}

module.exports = handleBlogRouter;