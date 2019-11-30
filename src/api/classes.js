import http from './http';
// 班级   classes
export default {
    // 获取列表
    fetchList: opts => {
        const url = 'classes/gets';
        const data = {
            course_category_id: opts.formInline.course_category_id || '',
            teach_way: opts.formInline.teach_way || '',
            status: opts.formInline.status || '',
            key: opts.formInline.key || '',
            sort: opts.formInline.sort || '',
            sortID: opts.formInline.sortID || '',
            limit: opts.formInline.page_size || '',
            page: opts.formInline.page || 1,
            is_delete: opts.formInline.is_delete || '0'
        };
        return http.get(url, data);
    }

};
