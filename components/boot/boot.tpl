<div>
    <x-status :name="name" :login="login"></x-status>
    <input type="text" value="{{name}}">
    <input type="text" value="{{age}}">
    <input type="text" value="{{sex}}">
    <input type="text" value="{{id}}">
    <input type="button" @click="loginout" value="{{action}}">
</div>