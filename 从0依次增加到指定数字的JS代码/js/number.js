
// $("#snzcnum").prop('number',0).animateNumber({number:5923},2000);
// $("#flfwnum").prop('number',0).animateNumber({number:3289},2000);


function getRule() {
	var animation={};
	var rule,cssRule;
	var ss = document.styleSheets;
	for (var i = 0; i < ss.length; ++i) {
		for (var x = 0; x < ss[i].rules.length; ++x) {
			rule = ss[i].rules[x];
			if (rule.name == "run" && rule.type == 7) {
				animation.cssRule = rule;
				animation.styleSheet = ss[i];
				animation.index = x;
			}
		}
	}
	return animation;
}
var test = getRule($('#change_color'))