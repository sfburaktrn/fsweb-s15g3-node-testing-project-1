const utils = require("./index");

describe("[Görev 1] nesneyiTrimle", () => {
  test("[1] propları trimlenmiş bir nesne döndürüyor", () => {
    // ÖRNEK
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.nesneyiTrimle(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Görev 2] verileniTrimle", () => {
  test("[3] verilen propu trimliyor", () => {
    let inputObj = { isim: "  jane  " };
    let expected = { isim: "jane" };

    let result = utils.verileniTrimle(inputObj, "isim");

    expect(result).toEqual(expected);
  });
  test("[4] verilen dışındaki proplar trimlenmeden döndürülüyor", () => {
    let inputObj = { isim: "  jane  ", age: " 21 " };
    let expected = { isim: "jane", age: " 21 " };

    let result = utils.verileniTrimle(inputObj, "isim");

    expect(result).toEqual(expected);
  });
});

describe("[Görev 3] enBuyukTamsayiyiBul", () => {
  test("[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }", () => {
    let list = [{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }];
    let expectValue = { tamsayi: 3 };

    let result = utils.enBuyukTamsayiyiBul(list);

    expect(result).toEqual(expectValue);
  });
});

describe("[Görev 4] Sayici", () => {
  let sayici;
  beforeEach(() => {
    sayici = new utils.Sayici(3); // her test yeni bir sayı ile başlatılıyor
  });
  test("[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor", () => {
    let result = sayici.asagiSay();
    expect(result).toBe(3);
  });
  test("[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor", () => {
    sayici.asagiSay();
    let result = sayici.asagiSay();
    expect(result).toBe(2);
  });
  test("[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz", () => {
    for (var i = 0; i < 1000; i++) {
      sayici.asagiSay();
    }
    let result = sayici.asagiSay();
    expect(result).toBe(0);
  });
});

describe("[Görev 5] Mevsimler", () => {
  let mevsimler;
  beforeEach(() => {
    mevsimler = new utils.Mevsimler(); // her test yeni bir mevsimle başlar
  });
  test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
    let result = mevsimler.sonraki();
    expect(result).toBe("yaz");
  });
  test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {
    mevsimler.sonraki();
    let result = mevsimler.sonraki();
    expect(result).toBe("sonbahar");
  });
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    mevsimler.sonraki();
    mevsimler.sonraki();
    let result = mevsimler.sonraki();
    expect(result).toBe("kış");
  });
  test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    let result = mevsimler.sonraki();
    expect(result).toBe("ilkbahar");
  });
  test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    mevsimler.sonraki();
    let result = mevsimler.sonraki();
    expect(result).toBe("yaz");
  });
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    for (var i = 0; i < 39; i++) {
      mevsimler.sonraki();
    }
    let result = mevsimler.sonraki();
    expect(result).toBe("ilkbahar");
  });
});

describe("[Görev 6] Araba", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Araba("focus", 20, 30); // her test yeni bir araba oluşturur
  });
  test("[15] arabayı sürünce güncellenmiş odometer döndürüyor", () => {
    expect(focus.sur(100)).toBe(100);
    expect(focus.sur(100)).toBe(200);
    expect(focus.sur(100)).toBe(300);
    expect(focus.sur(200)).toBe(500);
    expect(focus.sur(200)).toBe(600);
  });
  test("[16] arabayı sürmek benzin tüketiyor", () => {
    focus.sur(300);
    expect(focus.depo).toBe(10);
  });
  test("[17] benzinalma arabayı sürmeye izin veriyor", () => {
    focus.sur(600);
    focus.benzinal(10);
    focus.sur(100);
    expect(focus.odometer).toBe(700);
  });
  test("[18] dolu depoya benzin alma etki etmiyor", () => {
    focus.benzinal(10);
    expect(focus.depo).toBe(20);
  });
});

describe("[Görev 7] asenkronCiftSayi", () => {
  test("[19] bir çift sayı verilirse true çözümlüyor", () => {
    utils.asenkronCiftSayi(2).then((result) => {
      expect(result).toBeTruthy();
    });
  });
  test("[20] tek sayı verilirse false çözümlüyor", async () => {
    expect(await utils.asenkronCiftSayi(3)).toBeFalsy();
  });
});
