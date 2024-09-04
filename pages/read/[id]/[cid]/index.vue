<script lang="ts" setup>
const { id } = useRoute().params
navigateTo("/manga/" + id);
</script>