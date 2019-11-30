import routes from '@/router';
const state = {
    routes : [
        {
            path: '/index',
            name:'接口测试',
            component: (resolve) => {
                require.ensure(['@/views/index'], (require) => {
                    resolve(require('@/views/index'));
                });
            },
            meta: { role: 'index', title: '接口测试'},
        },
        {
            path: '/base64',
            name: 'base64',
            meta: { role: 'base64', title: 'base64'},
            component: (resolve) => {
                require.ensure(['@/views/base64'], (require) => {
                    resolve(require('@/views/base64'));
                });
            },
        },
        {
            path: '/asyn',
            name: '异步组件',
            meta: { role: 'asyn' },
            component: (resolve) => {
                require.ensure(['@/views/asyn'], (require) => {
                    resolve(require('@/views/asyn'));
                });
            },
        },
        {
            path: '/asyn1',
            name: '高级异步组件',
            meta: { role: 'asyn1' },
            component: (resolve) => {
                require.ensure(['@/views/asyn1'], (require) => {
                    resolve(require('@/views/asyn1'));
                });
            },
        },
        {
            path: '/maxHeight',
            name: '最大高度滑动动画',
            meta: { role: 'maxHeight' },
            component: (resolve) => {
                require.ensure(['@/views/maxHeight'], (require) => {
                    resolve(require('@/views/maxHeight'));
                });
            },
        },
        {
            path: '/searchDome',
            name: '搜索防抖上下选择',
            meta: { role: 'searchDome' },
            component: (resolve) => {
                require.ensure(['@/views/searchDome'], (require) => {
                    resolve(require('@/views/searchDome'));
                });
            },
        },
        {
            path: '/api',
            name: 'vue-API',
            meta: { role: 'api' },
            component: (resolve) => {
                require.ensure(['@/views/api/api'], (require) => {
                    resolve(require('@/views/api/api'));
                });
            },
            redirect: {name:'observable'},
            children:[
                {
                    path: '/api/observable',
                    name:'observable',
                    meta: { role: 'observable' },
                    component: (resolve) => {
                        require.ensure(['@/views/api/observable'], (require) => {
                            resolve(require('@/views/api/observable'));
                        });
                    },
                },
                {
                    path: '/api/provideAndInject',
                    name:'provideAndInject',
                    meta: { role: 'provideAndInject' },
                    component: (resolve) => {
                        require.ensure(['@/views/api/provideAndInject'], (require) => {
                            resolve(require('@/views/api/provideAndInject'));
                        });
                    },
                },
                {
                    path: '/api/attrsANDlisteners',
                    name:'$attrs和$listeners演示',
                    meta: { role: 'attrsANDlisteners' },
                    component: (resolve) => {
                        require.ensure(['@/views/api/attrsANDlisteners'], (require) => {
                            resolve(require('@/views/api/attrsANDlisteners'));
                        });
                    },
                }
            ]
        },
        {
            path: '/plugIn',
            name: 'plugIn',
            meta: { role: 'plugIn' },
            component: (resolve) => {
                require.ensure(['@/views/plugIn/plugIn'], (require) => {
                    resolve(require('@/views/plugIn/plugIn'));
                });
            },
            redirect: {name:'particles'},
            children:[
                {
                    path: '/plugIn/particles',
                    name:'particles',
                    meta: { role: 'particles' },
                    component: (resolve) => {
                        require.ensure(['@/views/plugIn/vue-particles'], (require) => {
                            resolve(require('@/views/plugIn/vue-particles'));
                        });
                    },
                },
                {
                    path: '/plugIn/kim-vue-touch',
                    name:'kim-vue-touch',
                    meta: { role: 'kim-vue-touch' },
                    component: (resolve) => {
                        require.ensure(['@/views/plugIn/kim-vue-touch'], (require) => {
                            resolve(require('@/views/plugIn/kim-vue-touch'));
                        });
                    },
                }
            ]
        },
        {
            path: '/bus',
            name: 'bus',
            meta: { role: 'bus' },
            component: (resolve) => {
                require.ensure(['@/views/bus'], (require) => {
                    resolve(require('@/views/bus'));
                });
            }
        },
        {
            path: '/cookie',
            name: 'cookie演示',
            meta: { role: 'cookie' },
            component: (resolve) => {
                require.ensure(['@/views/cookie'], (require) => {
                    resolve(require('@/views/cookie'));
                });
            }
        },
        {
            path: '/slot',
            name: 'slot演示',
            meta: { role: 'slot' },
            component: (resolve) => {
                require.ensure(['@/views/slot'], (require) => {
                    resolve(require('@/views/slot'));
                });
            }
        },
        {
            path: '/functionalComponent',
            name: '函数式组件演示',
            meta: { role: 'functionalComponent' },
            component: (resolve) => {
                require.ensure(['@/views/functionalComponent'], (require) => {
                    resolve(require('@/views/functionalComponent'));
                });
            }
        },
        {
            path: '/renderDemo',
            name: 'render演示',
            meta: { role: 'renderDemo' },
            component: (resolve) => {
                require.ensure(['@/views/renderDemo'], (require) => {
                    resolve(require('@/views/renderDemo'));
                });
            }
        },
        {
            path: '/imgCode',
            name: '图片验证码演示',
            meta: { role: 'imgCode' },
            component: (resolve) => {
                require.ensure(['@/views/imgCode'], (require) => {
                    resolve(require('@/views/imgCode'));
                });
            }
        },
    ]
};
const mutations = {
    setRouteLists(state, arr = []) {
        console.log(arr);
        if(arr === 'admin'){
            let routesList = [];
            state.routes.forEach((item)=>{
                routesList.push(item);
            });
            routes.options.routes = routesList;
            routes.addRoutes(routesList);
            window.sessionStorage.setItem("roles",JSON.stringify(arr));
            return;
        }
        if(Array.isArray(arr)){
            let routesList = [];
            arr.forEach((role)=>{
                state.routes.forEach((item)=>{
                    if(item.meta.role === role){
                        routesList.push(item);
                    }
                });
            });
            routes.options.routes = routesList;
            routes.addRoutes(routesList);
            window.sessionStorage.setItem("roles",JSON.stringify(arr));
        }
    }
};
const actions = {
    setRouteLists({ commit }, showHidden) {
        commit('setRouteLists', showHidden);
    }
};
export default {
    state,
    mutations,
    actions
};
