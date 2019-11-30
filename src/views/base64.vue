<template>
    <div class="base64-wrap">
        <p @click="changeUrl('base64')">base64URL</p>
        <p @click="changeUrl('')">正常URL</p>
    </div>
</template>

<script>
import { Base64 } from 'js-base64';
export default {
    data() {
        return {
            formInline:{
                page:0,
                page_size:20
            }
        };
    },
    methods: {
        changeUrl(type) {
            let info = '';
            if(type === 'base64'){
                this.$router.push({
                    query: {
                        info: Base64.encode(JSON.stringify(this.formInline))
                    }
                });
            } else {
                info = JSON.parse(Base64.decode(this.$route.query.info));
                this.$router.push({
                    query: info
                });
            }
        }
    },
};
</script>
<style lang="scss">
    .base64-wrap {
        p{
            cursor: pointer;
        }
    }
</style>