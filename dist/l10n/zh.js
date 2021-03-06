/* Mandarin locals for flatpickr */
var flatpickr = flatpickr || { l10ns: {} };
flatpickr.l10ns.zh = {};

flatpickr.l10ns.zh.weekdays = {
	shorthand: ["日", "一", "二", "三", "四", "五", "六"],
	longhand: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
};

flatpickr.l10ns.zh.months = {
	shorthand: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
	longhand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
};

flatpickr.l10ns.zh.rangeSeparator = " 至 ";
flatpickr.l10ns.zh.weekAbbreviation = "周";
flatpickr.l10ns.zh.scrollTitle = "滚动切换";
flatpickr.l10ns.zh.toggleTitle = "点击切换 12/24 小时时制";

if (typeof module !== "undefined") module.exports = flatpickr.l10ns;