export const executeIfFunction = f => typeof f === 'function' ? f() : f;
export const switchCase = cases => defaultCase => key => cases.hasOwnProperty(key) ? cases[key] : defaultCase;
export const switchCaseF = cases => defaultCase => key => executeIfFunction(switchCase(cases)(defaultCase)(key));
