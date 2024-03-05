// 2024-02-20 17:20

const url = $request.url;
const header = $request.headers;
const opt12306 = header["Operation-Type"] || header["operation-type"];

if (url.includes("/mobile.12306.cn/otsmobile/app/mgs/")) {
  const list12306 = [
    // "com.cars.otsmobile.bangbangSafe.deciveInfo", // 设备序列号
    // "com.cars.otsmobile.checkLoginStatus", // 登录信息
    // "com.cars.otsmobile.city",
    // "com.cars.otsmobile.initCountry",
    // "com.cars.otsmobile.initNewSysCache",
    // "com.cars.otsmobile.initProvince",
    "com.cars.otsmobile.integration.activityBanner", // 活动横幅
    "com.cars.otsmobile.memberInfo.getMemberQa", // 铁路会员 常见问题
    // "com.cars.otsmobile.memberInfo.integrationHomeInit", // 铁路会员 会员信息
    // "com.cars.otsmobile.newHomePage.getWeatherByStationCode", // 天气信息
    "com.cars.otsmobile.newHomePage.initData", // 热门资讯
    "com.cars.otsmobile.newHomePageBussData" // 商品信息流
    // "com.cars.otsmobile.newHomePageRefresh",
    // "com.cars.otsmobile.travelPage.initData", // 出行服务
  ];
  if (typeof $task !== "undefined") {
    if (list12306?.includes(opt12306)) {
      $done({ status: "HTTP/1.1 404 Not Found" });
    } else {
      $done({});
    }
  } else {
    if (list12306?.includes(opt12306)) {
      $done();
    } else {
      $done({});
    }
  }
} else {
  $done({});
}
