var tpl = __inline('status.tpl');

module.exports = Vue.extend({
	template: tpl,
	props: ['name', 'login'],
	data: function () {
		return {
			status: ''
		}
	},
	computed: {
		status: function () {
			if (this.login === '') {
				return '已离线';
			}
			else {
				return '已上线';
			}
		}
	}
});