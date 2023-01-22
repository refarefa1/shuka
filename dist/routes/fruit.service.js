"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fruitService = void 0;
const db_1 = require("../db");
function getFruits(cb) {
    try {
        const queryString = `SELECT * FROM fruit`;
        return db_1.db.query(queryString, (err, result) => {
            if (err)
                console.log(err);
            const fruits = result;
            cb(fruits);
        });
    }
    catch (err) {
        console.log(err);
    }
}
getFruits((fruits) => console.log(fruits));
function _createDemoData() {
    const fruits = [
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','תפוח עץ','fruits','14.90','https://img.freepik.com/free-photo/two-red-apples-isolated-white_114579-73124.jpg?w=1380&t=st=1674332003~exp=1674332603~hmac=12ad2f8cfea1686d9b68de56b5e04f069d56b5661bd2c7365f22a6c6d3b6e367')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','משמש','fruits','12.90','https://img.freepik.com/free-photo/fresh-yellow-apricots-isolated-white_114579-10486.jpg?w=1380&t=st=1674331892~exp=1674332492~hmac=22409acba9ac8da8e916e74b7207bc0706647cd5dd4d3f97a387ebe509c9dc15')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','מלון','fruits','16.90','https://img.freepik.com/free-photo/cantaloupe-melon-white_1339-8058.jpg?w=1380&t=st=1674329658~exp=1674330258~hmac=5e724abb00ee556f988b42f12359cc6a61be8d59ab88f7ed173d3db0a58dd4f1')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','ענבים ירוקים','fruits','39.90','https://img.freepik.com/free-photo/green-grapes-isolated-white_1232-1956.jpg?w=1060&t=st=1674329719~exp=1674330319~hmac=b6e8f9d9d8f21e62a084c45586e5b932c9e2ccb059f640cba23704698fa842a7')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','ענבים סגולים','fruits','35.90','https://img.freepik.com/premium-photo/fresh-grapes-white-background_181303-1948.jpg?w=1380')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','אוכמניות','fruits','15.90','https://img.freepik.com/free-photo/lots-blueberries_144627-395.jpg?w=1380&t=st=1674329757~exp=1674330357~hmac=9e358516ef202cb47711cfe3460fce459b9d0f3d6a2d024bca5e1cf814e3f7da')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','דובדבנים','fruits','34.90','https://img.freepik.com/free-photo/bunch-red-cherries-white-background_114579-10560.jpg?w=1380&t=st=1674329773~exp=1674330373~hmac=22fa0fa468d72c589afb06a30df889995ba61f4e427ddb0458a9bd1e0d7176f0')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','תותים','fruits','27.90','https://img.freepik.com/free-photo/red-fresh-strawberries-with-green-leaves_114579-10506.jpg?w=1380&t=st=1674329801~exp=1674330401~hmac=821881c8d530779c1063fa5388a93ed62295744449ff4dc493d35a252bbbebc3')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','אננס','fruits','44.90','https://img.freepik.com/premium-photo/juicy-pineapple-white-background-isolated_96064-298.jpg?w=826')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','בננה','fruits','8.90','https://img.freepik.com/free-photo/bananas_1339-1187.jpg?w=1380&t=st=1674329852~exp=1674330452~hmac=f2d6af52fc996ea3256c77f04e002846dfca9f3992c787245fdfbd484038059e')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','קיווי','fruits','24.90','https://img.freepik.com/premium-photo/ripe-whole-kiwi-with-leaves-white-wall_253984-954.jpg?w=996')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','אגס','fruits','19.90','https://img.freepik.com/premium-photo/ripe-green-pears-isolated-with-leaves-isolated_80510-586.jpg?w=1380')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','לימון','fruits','9.90','https://img.freepik.com/free-photo/lemon_1205-1667.jpg?w=1380&t=st=1674329963~exp=1674330563~hmac=101063af7231ac01eb7d00d7432104778e4d200cd917fcee9980f2c8a79e4cfb')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','תפוז','fruits','9.90','https://img.freepik.com/premium-photo/sweet-orange-fruit-with-leaves_183352-137.jpg?w=996')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','קלמנטינה','fruits','11.90','https://img.freepik.com/free-photo/mandarin-isolated-white-background_93675-131040.jpg?w=1380&t=st=1674329988~exp=1674330588~hmac=d75b375bd16a92e65bf633f106f7d8947eee1a65a31924ec912e529a8dac6cad')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','רימון','fruits','15.90','https://img.freepik.com/free-photo/exotic-delicious-pomegranate-white-background_144627-12571.jpg?w=1380&t=st=1674330012~exp=1674330612~hmac=67160d75656a36acc50306cc3eae8840e8694c829ad26ed9c437da6687f262a9')",
        // "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','תמר מגהול','fruits','24.90','https://img.freepik.com/premium-photo/isolated-dried-dates-white-background_719936-241.jpg?w=1380')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','פסיפלורה','fruits','29.90','https://img.freepik.com/premium-photo/purple-passion-fruit-isolated-white-background_253984-6273.jpg?w=1380')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','פפאיה ירוקה','fruits','17.90','https://img.freepik.com/free-photo/fresh-papaya-fruit_144627-34201.jpg?w=1380&t=st=1674330066~exp=1674330666~hmac=cb31d6872d1f26bcabfead65bf81e6f585fa53ba09e189eb7c051eb1e39c8bd0')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','קוקוס שלם','fruits','8.90','https://img.freepik.com/free-photo/fresh-coconuts-white-surface_144627-16040.jpg?w=1380&t=st=1674330082~exp=1674330682~hmac=83fbd8b368d63b3979c17f0a7570e65eced9f654907d8867d140648aced8172d')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','אבוקדו','vegetables','19.90','https://img.freepik.com/premium-photo/two-halves-fresh-avocado-isolated-white-space-design-element-product-label-catalog-print_106885-2316.jpg?w=1380')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','תפוח אדמה','vegetables','8.90','https://img.freepik.com/premium-photo/raw-potato-isolated-white-background-with-clipping-path_88281-1368.jpg?w=1060')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','בטטה','vegetables','12.90','https://img.freepik.com/free-photo/sweet-potato_144627-20748.jpg?w=1060&t=st=1674330267~exp=1674330867~hmac=f4d0eae2c3076682a1df65d3f9e38b311982b982ca286132fb58b0c7fc4460dd')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','בצל','vegetables','6.90','https://img.freepik.com/free-photo/raw-onions-white-surface_144627-45173.jpg?w=1380&t=st=1674330296~exp=1674330896~hmac=aad7277bd8b0e491ffcbadb4ba8b125a27ea56773c52c7003bc54f09d5f14c12')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','בצל סגול','vegetables','8.90','https://img.freepik.com/free-photo/red-onion-whole-isolated-white_146671-19175.jpg?w=1380&t=st=1674330287~exp=1674330887~hmac=da7e9861b4b0dfff625a1beb2ca7f86b6b5ddc5c3ba4601aad76dedb50a7b611')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','גזר','vegetables','7.90','https://img.freepik.com/premium-photo/fresh-carrots-isolated-white_272787-150.jpg?w=1380')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','דלעת','vegetables','9.90','https://img.freepik.com/premium-photo/fresh-orange-miniature-pumpkin-isolated_707345-160.jpg?w=1380')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','חציל','vegetables','8.90','https://img.freepik.com/free-photo/eggplant_144627-18693.jpg?w=740&t=st=1674330550~exp=1674331150~hmac=c2f638f9895e02ee22466e5a89d4f699178911cc34a08b0311c0018bfb516de3')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','כרוב לבן','vegetables','4.90','https://img.freepik.com/premium-photo/green-cabbage-vegetables-isolated-white_80510-721.jpg?w=1380')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','כרוב סגול','vegetables','7.90','https://img.freepik.com/free-photo/purple-cabbage_1339-922.jpg?w=1380&t=st=1674330403~exp=1674331003~hmac=662c1999917d68fe427a072ebdd319a5ab4d6a63ca8c472953633b8c38f5b2b0')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','כרובית','vegetables','12.90','https://img.freepik.com/premium-photo/fresh-cauliflower-isolated-white-background_33736-2684.jpg?w=826')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','מלפפון','vegetables','9.90','https://img.freepik.com/premium-photo/cucumber-with-leaves-white-wall_253984-3297.jpg?w=1380')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','עגבנייה','vegetables','14.90','https://img.freepik.com/premium-photo/red-tomatoes-with-cut-isolated-white_80510-576.jpg?w=1380')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','סלק אדום','vegetables','7.90','https://img.freepik.com/premium-photo/beetroot-vegetables-isolated-white_253984-4657.jpg?w=1380')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','פלפל ירוק','vegetables','13.90','https://img.freepik.com/premium-photo/green-pepper_253984-420.jpg?w=1060')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','פלפל אדום','vegetables','13.90','https://img.freepik.com/free-photo/red-bell-peppers-white-surface_144627-45160.jpg?w=1380&t=st=1674332084~exp=1674332684~hmac=20c162977ed37dbf6bb41995d603445b3c3ded815edc97c81e5e07c198575869')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','פלפל צהוב','vegetables','13.90','https://img.freepik.com/premium-photo/yellow-bell-pepper-isolated-white-background_185193-64608.jpg')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','פלפל חריף ירוק','vegetables','8.90','https://img.freepik.com/free-photo/green-chili-peppers_2829-14199.jpg?w=1060&t=st=1674330695~exp=1674331295~hmac=c168783ada72f46be7412987f2568d38a6b1621885542c60db8374cca3990522')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','קישוא','vegetables','11.90','https://img.freepik.com/premium-photo/butternut-squash-isolated_55883-7757.jpg')",
        "INSERT INTO `fruit`(`_id`, `name`, `family`, `price`, `imgUrl`) VALUES ('[value-1]','שום','vegetables','7.90','https://img.freepik.com/premium-photo/fresh-garlics_26628-476.jpg?w=996')",
    ];
    fruits.forEach(fruit => { db_1.db.query(fruit); });
    /* TO SQL

    INSERT INTO fruit_db.fruit(name, family, price, imgUrl)
VALUES (
        'ענבים סגולים',
        'fruits',
        '35.90',
        'https://img.freepik.com/premium-photo/fresh-grapes-white-background_181303-1948.jpg?w=1380'
    ),
    (
        'אוכמניות',
        'fruits',
        '15.90',
        'https://img.freepik.com/free-photo/lots-blueberries_144627-395.jpg?w=1380&t=st=1674329757~exp=1674330357~hmac=9e358516ef202cb47711cfe3460fce459b9d0f3d6a2d024bca5e1cf814e3f7da'
    ),
    (
        'דובדבנים',
        'fruits',
        '34.90',
        'https://img.freepik.com/free-photo/bunch-red-cherries-white-background_114579-10560.jpg?w=1380&t=st=1674329773~exp=1674330373~hmac=22fa0fa468d72c589afb06a30df889995ba61f4e427ddb0458a9bd1e0d7176f0'
    ),
    (
        'תותים',
        'fruits',
        '27.90',
        'https://img.freepik.com/free-photo/red-fresh-strawberries-with-green-leaves_114579-10506.jpg?w=1380&t=st=1674329801~exp=1674330401~hmac=821881c8d530779c1063fa5388a93ed62295744449ff4dc493d35a252bbbebc3'
    ),
    (
        'אננס',
        'fruits',
        '44.90',
        'https://img.freepik.com/premium-photo/juicy-pineapple-white-background-isolated_96064-298.jpg?w=826'
    ),
    (
        'בננה',
        'fruits',
        '8.90',
        'https://img.freepik.com/free-photo/bananas_1339-1187.jpg?w=1380&t=st=1674329852~exp=1674330452~hmac=f2d6af52fc996ea3256c77f04e002846dfca9f3992c787245fdfbd484038059e'
    ),
    (
        'קיווי',
        'fruits',
        '24.90',
        'https://img.freepik.com/premium-photo/ripe-whole-kiwi-with-leaves-white-wall_253984-954.jpg?w=996'
    ),
    (
        'אגס',
        'fruits',
        '19.90',
        'https://img.freepik.com/premium-photo/ripe-green-pears-isolated-with-leaves-isolated_80510-586.jpg?w=1380'
    ),
    (
        'לימון',
        'fruits',
        '9.90',
        'https://img.freepik.com/free-photo/lemon_1205-1667.jpg?w=1380&t=st=1674329963~exp=1674330563~hmac=101063af7231ac01eb7d00d7432104778e4d200cd917fcee9980f2c8a79e4cfb'
    ),
    (
        'תפוז',
        'fruits',
        '9.90',
        'https://img.freepik.com/premium-photo/sweet-orange-fruit-with-leaves_183352-137.jpg?w=996'
    ),
    (
        'קלמנטינה',
        'fruits',
        '11.90',
        'https://img.freepik.com/free-photo/mandarin-isolated-white-background_93675-131040.jpg?w=1380&t=st=1674329988~exp=1674330588~hmac=d75b375bd16a92e65bf633f106f7d8947eee1a65a31924ec912e529a8dac6cad'
    ),
    (
        'רימון',
        'fruits',
        '15.90',
        'https://img.freepik.com/free-photo/exotic-delicious-pomegranate-white-background_144627-12571.jpg?w=1380&t=st=1674330012~exp=1674330612~hmac=67160d75656a36acc50306cc3eae8840e8694c829ad26ed9c437da6687f262a9'
    ),
    (
        'פסיפלורה',
        'fruits',
        '29.90',
        'https://img.freepik.com/premium-photo/purple-passion-fruit-isolated-white-background_253984-6273.jpg?w=1380'
    ),
    (
        'פפאיה ירוקה',
        'fruits',
        '17.90',
        'https://img.freepik.com/free-photo/fresh-papaya-fruit_144627-34201.jpg?w=1380&t=st=1674330066~exp=1674330666~hmac=cb31d6872d1f26bcabfead65bf81e6f585fa53ba09e189eb7c051eb1e39c8bd0'
    ),
    (
        'קוקוס שלם',
        'fruits',
        '8.90',
        'https://img.freepik.com/free-photo/fresh-coconuts-white-surface_144627-16040.jpg?w=1380&t=st=1674330082~exp=1674330682~hmac=83fbd8b368d63b3979c17f0a7570e65eced9f654907d8867d140648aced8172d'
    ),
    (
        'אבוקדו',
        'vegetables',
        '19.90',
        'https://img.freepik.com/premium-photo/two-halves-fresh-avocado-isolated-white-space-design-element-product-label-catalog-print_106885-2316.jpg?w=1380'
    ),
    (
        'תפוח אדמה',
        'vegetables',
        '8.90',
        'https://img.freepik.com/premium-photo/raw-potato-isolated-white-background-with-clipping-path_88281-1368.jpg?w=1060'
    ),
    (
        'בטטה',
        'vegetables',
        '12.90',
        'https://img.freepik.com/free-photo/sweet-potato_144627-20748.jpg?w=1060&t=st=1674330267~exp=1674330867~hmac=f4d0eae2c3076682a1df65d3f9e38b311982b982ca286132fb58b0c7fc4460dd'
    ),
    (
        'בצל',
        'vegetables',
        '6.90',
        'https://img.freepik.com/free-photo/raw-onions-white-surface_144627-45173.jpg?w=1380&t=st=1674330296~exp=1674330896~hmac=aad7277bd8b0e491ffcbadb4ba8b125a27ea56773c52c7003bc54f09d5f14c12'
    ),
    (
        'בצל סגול',
        'vegetables',
        '8.90',
        'https://img.freepik.com/free-photo/red-onion-whole-isolated-white_146671-19175.jpg?w=1380&t=st=1674330287~exp=1674330887~hmac=da7e9861b4b0dfff625a1beb2ca7f86b6b5ddc5c3ba4601aad76dedb50a7b611'
    ),
    (
        'גזר',
        'vegetables',
        '7.90',
        'https://img.freepik.com/premium-photo/fresh-carrots-isolated-white_272787-150.jpg?w=1380'
    ),
    (
        'דלעת',
        'vegetables',
        '9.90',
        'https://img.freepik.com/premium-photo/fresh-orange-miniature-pumpkin-isolated_707345-160.jpg?w=1380'
    ),
    (
        'חציל',
        'vegetables',
        '8.90',
        'https://img.freepik.com/free-photo/eggplant_144627-18693.jpg?w=740&t=st=1674330550~exp=1674331150~hmac=c2f638f9895e02ee22466e5a89d4f699178911cc34a08b0311c0018bfb516de3'
    ),
    (
        'כרוב לבן',
        'vegetables',
        '4.90',
        'https://img.freepik.com/premium-photo/green-cabbage-vegetables-isolated-white_80510-721.jpg?w=1380'
    ),
    (
        'כרוב סגול',
        'vegetables',
        '7.90',
        'https://img.freepik.com/free-photo/purple-cabbage_1339-922.jpg?w=1380&t=st=1674330403~exp=1674331003~hmac=662c1999917d68fe427a072ebdd319a5ab4d6a63ca8c472953633b8c38f5b2b0'
    ),
    (
        'כרובית',
        'vegetables',
        '12.90',
        'https://img.freepik.com/premium-photo/fresh-cauliflower-isolated-white-background_33736-2684.jpg?w=826'
    ),
    (
        'מלפפון',
        'vegetables',
        '9.90',
        'https://img.freepik.com/premium-photo/cucumber-with-leaves-white-wall_253984-3297.jpg?w=1380'
    ),
    (
        'עגבנייה',
        'vegetables',
        '14.90',
        'https://img.freepik.com/premium-photo/red-tomatoes-with-cut-isolated-white_80510-576.jpg?w=1380'
    ),
    (
        'סלק אדום',
        'vegetables',
        '7.90',
        'https://img.freepik.com/premium-photo/beetroot-vegetables-isolated-white_253984-4657.jpg?w=1380'
    ),
    (
        'פלפל ירוק',
        'vegetables',
        '13.90',
        'https://img.freepik.com/premium-photo/green-pepper_253984-420.jpg?w=1060'
    ),
    (
        'פלפל אדום',
        'vegetables',
        '13.90',
        'https://img.freepik.com/free-photo/red-bell-peppers-white-surface_144627-45160.jpg?w=1380&t=st=1674332084~exp=1674332684~hmac=20c162977ed37dbf6bb41995d603445b3c3ded815edc97c81e5e07c198575869'
    ),
    (
        'פלפל צהוב',
        'vegetables',
        '13.90',
        'https://img.freepik.com/premium-photo/yellow-bell-pepper-isolated-white-background_185193-64608.jpg'
    ),
    (
        'פלפל חריף ירוק',
        'vegetables',
        '8.90',
        'https://img.freepik.com/free-photo/green-chili-peppers_2829-14199.jpg?w=1060&t=st=1674330695~exp=1674331295~hmac=c168783ada72f46be7412987f2568d38a6b1621885542c60db8374cca3990522'
    ),
    (
        'קישוא',
        'vegetables',
        '11.90',
        'https://img.freepik.com/premium-photo/butternut-squash-isolated_55883-7757.jpg'
    ),
    (
        'שום',
        'vegetables',
        '7.90',
        'https://img.freepik.com/premium-photo/fresh-garlics_26628-476.jpg?w=996'
    )

    */
}
exports.fruitService = {
    getFruits
};
