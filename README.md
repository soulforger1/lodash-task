# Context

## lodash

### Introduction

`lodash.js` дотор хариулт байгаа

Зөвхөн LODASH ашиглана.

1.  Ялгаатай элемэнтийг хэвлэ. ([1,2,3], [1,2,4] => [3])

2.  `{ product: "banana", hasGMO: true }` объектоос бусдыг нь хэвлэ.

    ```js
    let products = [
      { product: "banana", hasGMO: true },
      { product: "apple", hasGMO: false },
      { product: "orange", hasGMO: false },
    ];
    ```

3.  `hasGMO` үнэн байх элемэнтийг индексийг ол.
    ```js
    let products = [
      { product: "banana", hasGMO: true },
      { product: "apple", hasGMO: false },
      { product: "orange", hasGMO: false },
    ];
    ```
4.  Массивыг `0` р дүүргэ.
5.  Ялгаатай 2 массиваас ижил элемэнтүүдийг ол.
6.  Ялгаатай 2 массивийн бүх элэмэнтийг хэвлэ. Элемэнт давтагдахгүй.
7.  2 Массивын ялгаатай утгуудыг хэвлэ. ([1,2,3], [1,2,4] => [3,4])

---

8. 2 утга ижил эсэхийг шалга (include type) (2 "2" -> false)

---

9. Массивын хамгийн их тоог ол.
10. Массивын бүх элемэнтийн нийлбэрийг ол.

---

11. 2 тооны завсар санамсаргүй тоо гарга.

---

12. 2 объектийг нэг объект болго.

    {a: 1} , {b: 2} => {a:1, b:2}

13. `hasGMO : true` байх объектийн key-ийг хэвлэ

    ```js
    let products = {
      banana: { hasGMO: true },
      apple: { hasGMO: false },
      orange: { hasGMO: false },
    };
    ```

14. Print all keys

    Объектийн бүх key-ийг хэвлэ
