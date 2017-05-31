'use strict';
var tpl = __inline('boot.tpl');

exports.init = function (targetElId) {
	var vm = new Vue({
		el: targetElId,
		template: tpl,
		components: {
            'x-status': require('widgets/status')
        },
		data: {
			name: 'wb-xyr286958',
			age: 21,
			sex: 'male',
			id: '1',
			login: 'wb-xyr286958',
			action: '登出'
		},
		methods: {
			loginout: function () {
				if (this.login === '') {
					this.login = this.name;
					this.action = '登出';
				}
				else {
					this.login = '';
					this.action = '登入';
				}
			}
		}
	});
};