<template>
    <div class="test">
        <div class="container">
            <div class="select">
                <p class="select__text">{{selectText}}</p>
                <span class="select__icon">
                    <i class="fal fa-chevron-down"></i>
                </span>
                <select @change="changeOption($event)">
                    <option :value="selectOption.selectOptionValue" v-for="(selectOption, index) in selectOptions" :key="index">{{selectOption.selectOptionText}}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectOptions: [
                {selectOptionText: 'Russia', selectOptionValue: 'Russia'},
                {selectOptionText: 'Netherlands', selectOptionValue: 'Netherlands'},
                {selectOptionText: 'Germany', selectOptionValue: 'Germany'},
            ],
            selectText: 'Choose...'
        }
    },
    methods: {
        changeOption(event) {
            this.selectText = event.target.value;
        }
    }
}
</script>

<style>

</style>
