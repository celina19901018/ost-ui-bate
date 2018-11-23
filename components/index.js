/* 定义分类标题须以 'MENU_ITEM' 开头声明一个对象，title 为标题，before 指插入该模块之前；
*  输出模块命名务必与组件文件夹名称保持一致，否则将无法获取到部分资源；
*/

export const MENU_ITEM_0 = {title: '布局类', before: 'OstWhiteSpace'};
export { default as OstWhiteSpace } from './OstWhiteSpace';
export { default as OstWhiteBlank } from './OstWhiteBlank';
export { default as OstText } from './OstText';

export const MENU_ITEM_1 = {title: '复杂功能', before: 'OstButton'};
export { default as OstButton } from './OstButton';
export { default as OstMask } from './OstMask';
export { default as OstLoading } from './OstLoading';

export const MENU_ITEM_2 = {title: '样例', before: 'OstDemo'};
export { default as OstDemo } from './OstDemo';
