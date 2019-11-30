/**
 * 操作cookie
 */
const operationCookie = () => {
    let cookie = {
        //设置cookie方法
        set:function(key,val,time){
            var date=new Date(); //获取当前时间
            var expiresDays=time;  //将date设置为n天以后的时间
            date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
            document.cookie=key + "=" + val +";expires="+date.toGMTString();  //设置cookie
        },
        //获取cookie方法
        get:function(key){
            //获取cookie，并且将获得的cookie格式化，去掉空格字符
            let cookie = document.cookie.replace(/[ ]/g,"");
            if(cookie === ''){
                return false;
            }
            if(!key){
                return cookie;
            }
            let arrCookie = cookie.split(";");
            let tips;
            for(let i=0;i<arrCookie.length;i++){   //使用for循环查找cookie中的tips变量
                let arr=arrCookie[i].split("=");   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
                if(key==arr[0]){  //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
                    tips=arr[1];   //将cookie的值赋给变量tips
                    break;   //终止for循环遍历
                }
            }
            return tips;
        },
        // 删除cookie方法
        delete:function(key){
            let date = new Date(); //获取当前时间
            date.setTime(date.getTime()-10000); //将date设置为过去的时间
            document.cookie = key + "=v; expires =" +date.toGMTString();//设置cookie
        }
    };
    return cookie;
};
export default {
    operationCookie
};
