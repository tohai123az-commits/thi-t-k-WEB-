/* =====================================================
   DANH SÁCH SẢN PHẨM
===================================================== */

const products = [

    {
        id: 1,
        name: "Áo thun Basic",
        category: "ao",
        price: 199000,

        description:
            "Áo thun Basic thiết kế đơn giản, trẻ trung, phù hợp mặc hàng ngày.",

        sizes: ["S", "M", "L", "XL"],

        colors: [
            {
                name: "Trắng",
                class: "white",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmhazlzci867d5.webp"
            },
            {
                name: "Đen",
                class: "black",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-moze49mgy5fm03.webp"
            },
            {
                name: "Đỏ",
                class: "red",
                image:
                    "https://down-vn.img.susercontent.com/file/sg-11134201-7rauz-ma7y4hjg6nlaeb.webp"
            }
        ]
    },


    {
        id: 2,
        name: "Áo Polo Classic",
        category: "ao",
        price: 299000,

        description:
            "Áo Polo phong cách lịch sự nhưng vẫn trẻ trung, thích hợp đi học và đi chơi.",

        sizes: ["S", "M", "L", "XL"],

        colors: [
            {
                name: "Trắng",
                class: "white",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mnfajy58nq4haf.webp"
            },
            {
                name: "Xanh lá",
                class: "green",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lu1i75rahd7jb8.webp"
            },
            {
                name: "Đen",
                class: "black",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m8fnf2lsgyo7ad.webp"
            }
        ]
    },


    {
        id: 3,
        name: "Áo sơ mi Oxford",
        category: "ao",
        price: 349000,

        description:
            "Áo sơ mi Oxford thanh lịch, chất liệu thoải mái và dễ phối đồ.",

        sizes: ["S", "M", "L", "XL"],

        colors: [
            {
                name: "Trắng",
                class: "white",
                image:
                    "https://down-vn.img.susercontent.com/file/sg-11134201-7rfig-m92kh9aklf3673.webp"
            },
            {
                name: "Xanh",
                class: "blue",
                image:
                    "https://down-vn.img.susercontent.com/file/sg-11134201-7rffq-m92kh9m85pyfb1.webp"
            },
            {
                name: "Đen",
                class: "black",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-meleps2v0b9da3.webp"
            }
        ]
    },


    {
        id: 4,
        name: "Áo Hoodie Basic",
        category: "ao",
        price: 499000,

        description:
            "Hoodie Basic phong cách năng động, phù hợp thời tiết se lạnh.",

        sizes: ["S", "M", "L", "XL"],

        colors: [
            {
                name: "Xám",
                class: "gray",
                image:
                    "https://down-vn.img.susercontent.com/file/3a26b6b872b91a1abeddac88b5851335.webp"
            },
            {
                name: "Đen",
                class: "black",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0lw2q2kpbe5a9.webp"
            },
            {
                name: "Đỏ",
                class: "red",
                image:
                    "https://down-vn.img.susercontent.com/file/75431a7c16be876b26b630b4f5452127.webp"
            }
        ]
    },


    {
        id: 5,
        name: "Áo khoác Bomber",
        category: "ao",
        price: 599000,

        description:
            "Áo khoác Bomber cá tính, phù hợp phong cách đường phố.",

        sizes: ["S", "M", "L", "XL"],

        colors: [
            {
                name: "Đen",
                class: "black",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mh70qzqsxtl4e7.webp"
            },
            {
                name: "Trắng",
                class: "white",
                image:
                    "https://down-vn.img.susercontent.com/file/sg-11134201-824j3-megovnm2aha9c3.webp"
            },
            {
                name: "Nâu",
                class: "brown",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mbz1iad6yuol6a.webp"
            }
        ]
    },


    {
        id: 6,
        name: "Quần Jeans Slim",
        category: "quan",
        price: 429000,

        description:
            "Quần Jeans Slim trẻ trung, dễ kết hợp với nhiều loại áo.",

        sizes: ["S", "M", "L", "XL"],

        colors: [
            {
                name: "Xanh",
                class: "blue",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lu799boktno18c.webp"
            },
            {
                name: "Đen",
                class: "black",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lu799bokv28ha8.webp"
            }
        ]
    },


    {
        id: 7,
        name: "Quần Kaki",
        category: "quan",
        price: 379000,

        description:
            "Quần Kaki thiết kế đơn giản, lịch sự và dễ mặc.",

        sizes: ["S", "M", "L", "XL"],

        colors: [
            {
                name: "Be",
                class: "brown",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mr5ddznpe70idd.webp"
            },
            {
                name: "Đen",
                class: "black",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mr5dei1x2s5od0.webp"
            },
            {
                name: "Xám",
                class: "gray",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mei89v94uadc02.webp"
            }
        ]
    },


    {
        id: 8,
        name: "Quần Short Basic",
        category: "quan",
        price: 249000,

        description:
            "Quần short năng động, thoải mái cho những ngày hè.",

        sizes: ["S", "M", "L", "XL"],

        colors: [
            {
                name: "Đen",
                class: "black",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mlsxhqj6qzghac.webp"
            },
            {
                name: "Nâu đen",
                class: "brown",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m9dy3qhbyvla6b.webp"
            },
            {
                name: "Trắng",
                class: "white",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m9dy3qgi03fydc.webp"
            }
        ]
    },


    {
        id: 9,
        name: "Váy chữ A",
        category: "vay",
        price: 459000,

        description:
            "Váy chữ A trẻ trung, thiết kế nữ tính và dễ phối phụ kiện.",

        sizes: ["S", "M", "L", "XL"],

        colors: [
            {
                name: "Hồng",
                class: "pink",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-ml54gt4lpwxv02.webp"
            },
            {
                name: "Vàng",
                class: "yellow",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mlualtnqkwlc21.webp"
            },
            {
                name: "Xanh",
                class: "blue",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mla9wp0g3c3sbc.webp"
            }
        ]
    },


    {
        id: 10,
        name: "Váy liền thân",
        category: "vay",
        price: 529000,

        description:
            "Váy liền thân thanh lịch, phù hợp đi chơi và dự tiệc.",

        sizes: ["S", "M", "L", "XL"],

        colors: [
            {
                name: "Đen",
                class: "black",
                image:
                    "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=80"
            },
            {
                name: "Đỏ",
                class: "red",
                image:
                    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80"
            },
            {
                name: "Hồng",
                class: "pink",
                image:
                    "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=700&q=80"
            }
        ]
    },


    {
        id: 11,
        name: "Chân váy thời trang",
        category: "vay",
        price: 329000,

        description:
            "Chân váy thời trang, dễ kết hợp với áo thun hoặc áo sơ mi.",

        sizes: ["S", "M", "L", "XL"],

        colors: [
            {
                name: "Đen",
                class: "black",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134201-820l4-midvklw5qqyv30.webp"
            },
            {
                name: "Xám",
                class: "gray",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134201-820l4-midvkl12glqba9.webp"
            },
            {
                name: "Nâu",
                class: "brown",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134201-820l4-midvkk4rzg8w0a.webp"
            }
        ]
    },


    {
        id: 12,
        name: "Áo len cổ tròn",
        category: "ao",
        price: 399000,

        description:
            "Áo len cổ tròn mềm mại, thiết kế đơn giản và giữ ấm tốt.",

        sizes: ["S", "M", "L", "XL"],

        colors: [
            {
                name: "Trắng",
                class: "white",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mczvhzz9bwz1ce@resize_w900_nl.webp"
            },
            {
                name: "Đen",
                class: "black",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mczy09pdwp4v8c.webp"
            },
            {
                name: "Đỏ",
                class: "red",
                image:
                    "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-mczvqjbfkvnj5d@resize_w900_nl.webp"
            }
        ]
    }

];


/* =====================================================
   BIẾN
===================================================== */

let cart = [];

let currentProduct = null;

let currentColorIndex = 0;

let currentSize = null;

let currentCategory = "all";

let searchKeyword = "";

let selectedColors = {};

let selectedSizes = {};

let memberRegistered = false;


/* =====================================================
   HIỂN THỊ SẢN PHẨM
===================================================== */

function renderProducts(list = products) {

    const productList =
        document.getElementById(
            "product-list"
        );


    if (list.length === 0) {

        productList.innerHTML = `
            <p class="no-product">
                😥 Không tìm thấy sản phẩm.
            </p>
        `;

        return;
    }


    productList.innerHTML =
        list.map(product => {

            if (
                selectedColors[product.id]
                === undefined
            ) {

                selectedColors[product.id] = 0;

            }


            const colorIndex =
                selectedColors[product.id];


            return `

                <div class="product">

                    <img
                        class="product-image"
                        id="product-img-${product.id}"

                        src="
                            ${product.colors[colorIndex].image}
                        "

                        alt="${product.name}"
                    >


                    <div class="product-info">

                        <h3>
                            ${product.name}
                        </h3>


                        <p class="product-price">

                            ${product.price.toLocaleString()}đ

                        </p>


                        <!-- MÀU -->

                        <div
                            class="colors"
                            id="colors-${product.id}">

                            ${
                                product.colors
                                .map((color, index) => `

                                    <button
                                        class="
                                            color
                                            ${color.class}
                                            ${
                                                index === colorIndex
                                                ? "active"
                                                : ""
                                            }
                                        "

                                        title="${color.name}"

                                        onclick="
                                            changeColor(
                                                ${product.id},
                                                ${index}
                                            )
                                        ">
                                    </button>

                                `)
                                .join("")
                            }

                        </div>


                        <p
                            class="color-name"
                            id="color-name-${product.id}">

                            Màu:
                            ${product.colors[colorIndex].name}

                        </p>


                        <!-- SIZE -->

                        <div class="sizes">

                            ${
                                product.sizes
                                .map(size => `

                                    <button
                                        class="
                                            size
                                            ${
                                                selectedSizes[product.id]
                                                === size
                                                ? "active"
                                                : ""
                                            }
                                        "

                                        onclick="
                                            changeSize(
                                                ${product.id},
                                                '${size}'
                                            )
                                        ">

                                        ${size}

                                    </button>

                                `)
                                .join("")
                            }

                        </div>


                        <!-- NÚT -->

                        <div class="product-buttons">

                            <button
                                class="detail-button"

                                onclick="
                                    showDetail(
                                        ${product.id}
                                    )
                                ">

                                Chi tiết

                            </button>


                            <button
                                class="buy-button"

                                onclick="
                                    buyProduct(
                                        ${product.id}
                                    )
                                ">

                                Mua ngay

                            </button>

                        </div>

                    </div>

                </div>

            `;

        })
        .join("");

}


/* =====================================================
   CHỌN MÀU
===================================================== */

function changeColor(
    productId,
    colorIndex
) {

    const product =
        products.find(
            p => p.id === productId
        );


    if (!product) return;


    selectedColors[productId] =
        colorIndex;


    const color =
        product.colors[colorIndex];


    document.getElementById(
        "product-img-" + productId
    ).src = color.image;


    document.getElementById(
        "color-name-" + productId
    ).textContent =
        "Màu: " + color.name;


    const buttons =
        document.querySelectorAll(
            "#colors-" +
            productId +
            " .color"
        );


    buttons.forEach(button => {

        button.classList.remove(
            "active"
        );

    });


    if (buttons[colorIndex]) {

        buttons[colorIndex]
            .classList.add("active");

    }

}


/* =====================================================
   CHỌN SIZE
===================================================== */

function changeSize(
    productId,
    size
) {

    selectedSizes[productId] =
        size;


    const buttons =
        document.querySelectorAll(
            ".product .size"
        );


    buttons.forEach(button => {

        const onclick =
            button.getAttribute(
                "onclick"
            );


        if (
            onclick &&
            onclick.includes(
                changeSize({productId}, '${size}')
            )
        ) {

            button.classList.add(
                "active"
            );

        }

    });


    renderProducts(
        getFilteredProducts()
    );

}


/* =====================================================
   LẤY SẢN PHẨM SAU KHI LỌC
===================================================== */

function getFilteredProducts() {

    return products.filter(
        product => {

            const matchCategory =
                currentCategory === "all" ||
                product.category ===
                currentCategory;


            const matchSearch =
                product.name
                .toLowerCase()
                .includes(
                    searchKeyword
                );


            return (
                matchCategory &&
                matchSearch
            );

        }
    );

}


/* =====================================================
   CHI TIẾT SẢN PHẨM
===================================================== */

function showDetail(productId) {

    const product =
        products.find(
            p => p.id === productId
        );


    if (!product) return;


    currentProduct =
        product;


    currentColorIndex =
        selectedColors[product.id] || 0;


    currentSize =
        selectedSizes[product.id] || null;


    const color =
        product.colors[
            currentColorIndex
        ];


    document.getElementById(
        "detail-name"
    ).textContent =
        product.name;


    document.getElementById(
        "detail-price"
    ).textContent =
        product.price.toLocaleString() +
        "đ";


    document.getElementById(
        "detail-description"
    ).textContent =
        product.description;


    document.getElementById(
        "detail-image"
    ).src =
        color.image;


    document.getElementById(
        "detail-color-name"
    ).textContent =
        "Màu đang chọn: " +
        color.name;


    document.getElementById(
        "detail-size-name"
    ).textContent =
        currentSize ||
        "Chưa chọn";


    renderDetailColors();

    renderDetailSizes();


    document.getElementById(
        "detailModal"
    ).style.display =
        "flex";

}


/* =====================================================
   MÀU TRONG CHI TIẾT
===================================================== */

function renderDetailColors() {

    const container =
        document.getElementById(
            "detail-colors"
        );


    container.innerHTML =
        currentProduct.colors
        .map(
            (color, index) => `

                <button

                    class="
                        color
                        ${color.class}
                        ${
                            index === currentColorIndex
                            ? "active"
                            : ""
                        }
                    "

                    title="${color.name}"

                    onclick="
                        changeDetailColor(
                            ${index}
                        )
                    ">

                </button>

            `
        )
        .join("");

}


/* =====================================================
   ĐỔI MÀU TRONG CHI TIẾT
===================================================== */

function changeDetailColor(index) {

    currentColorIndex =
        index;


    const color =
        currentProduct.colors[index];


    document.getElementById(
        "detail-image"
    ).src =
        color.image;


    document.getElementById(
        "detail-color-name"
    ).textContent =
        "Màu đang chọn: " +
        color.name;


    renderDetailColors();

}


/* =====================================================
   HIỂN THỊ SIZE TRONG CHI TIẾT
===================================================== */

function renderDetailSizes() {

    const container =
        document.getElementById(
            "detail-sizes"
        );


    container.innerHTML =
        currentProduct.sizes
        .map(
            size => `

                <button

                    class="
                        size
                        ${
                            size === currentSize
                            ? "active"
                            : ""
                        }
                    "

                    onclick="
                        changeDetailSize(
                            '${size}'
                        )
                    ">

                    ${size}

                </button>

            `
        )
        .join("");

}


/* =====================================================
   CHỌN SIZE TRONG CHI TIẾT
===================================================== */

function changeDetailSize(size) {

    currentSize =
        size;


    selectedSizes[
        currentProduct.id
    ] = size;


    document.getElementById(
        "detail-size-name"
    ).textContent =
        size;


    renderDetailSizes();

}


/* =====================================================
   ĐÓNG CHI TIẾT
===================================================== */

function closeDetail() {

    document.getElementById(
        "detailModal"
    ).style.display =
        "none";

}


/* =====================================================
   THÊM VÀO GIỎ
===================================================== */

function addToCart(
    name,
    price,
    color,
    size
) {

    const existing =
        cart.find(
            item =>
                item.name === name &&
                item.color === color &&
                item.size === size
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            name: name,

            price: price,

            color: color,

            size: size,

            quantity: 1

        });

    }


    updateCart();


    alert(

        "✅ ĐÃ THÊM VÀO GIỎ HÀNG!\n\n" +

        "🛍️ " + name + "\n" +

        "🎨 Màu: " + color + "\n" +

        "📏 Size: " + size + "\n" +

        "💰 Giá: " +
        price.toLocaleString() +
        "đ"

    );

}


/* =====================================================
   CẬP NHẬT GIỎ
===================================================== */

function updateCart() {

    let count = 0;


    cart.forEach(
        item => {

            count +=
                item.quantity;

        }
    );


    document.getElementById(
        "cart-count"
    ).textContent =
        count;


    displayCart();

}


/* =====================================================
   HIỂN THỊ GIỎ
===================================================== */

function displayCart() {

    const cartItems =
        document.getElementById(
            "cart-items"
        );


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p class="empty-cart">
                🛒 Giỏ hàng đang trống.
            </p>

        `;


        document.getElementById(
            "cart-total"
        ).textContent =
            "0đ";


        return;

    }


    let total = 0;


    cartItems.innerHTML =
        cart.map(
            (item, index) => {

                total +=
                    item.price *
                    item.quantity;


                return `

                    <div class="cart-item">

                        <div
                            class="cart-item-info">

                            <strong>
                                ${item.name}
                            </strong>

                            <span
                                class="cart-color">

                                🎨 Màu:
                                ${item.color}

                            </span>

                            <br>

                            <span
                                class="cart-size">

                                📏 Size:
                                ${item.size}

                            </span>

                            <br>

                            💰
                            ${item.price.toLocaleString()}đ

                        </div>


                        <div class="quantity">

                            <button
                                onclick="
                                    changeQuantity(
                                        ${index},
                                        -1
                                    )
                                ">

                                -

                            </button>


                            <span>
                                ${item.quantity}
                            </span>


                            <button
                                onclick="
                                    changeQuantity(
                                        ${index},
                                        1
                                    )
                                ">

                                +

                            </button>

                        </div>


                        <button
                            class="remove-button"

                            onclick="
                                removeFromCart(
                                    ${index}
                                )
                            ">

                            Xóa

                        </button>

                    </div>

                `;

            }
        )
        .join("");


    document.getElementById(
        "cart-total"
    ).textContent =
        total.toLocaleString() +
        "đ";

}


/* =====================================================
   TĂNG / GIẢM SỐ LƯỢNG
===================================================== */

function changeQuantity(
    index,
    amount
) {

    cart[index].quantity +=
        amount;


    if (
        cart[index].quantity <= 0
    ) {

        cart.splice(
            index,
            1
        );

    }


    updateCart();

}


/* =====================================================
   XÓA SẢN PHẨM
===================================================== */

function removeFromCart(index) {

    cart.splice(
        index,
        1
    );


    updateCart();

}


/* =====================================================
   MỞ GIỎ
===================================================== */

function openCart() {

    document.getElementById(
        "cartModal"
    ).style.display =
        "flex";


    displayCart();

}


/* =====================================================
   ĐÓNG GIỎ
===================================================== */

function closeCart() {

    document.getElementById(
        "cartModal"
    ).style.display =
        "none";

}


/* =====================================================
   MUA NGAY
   KHÔNG THÊM VÀO GIỎ
===================================================== */

function buyProduct(productId) {

    const product =
        products.find(
            p => p.id === productId
        );


    if (!product) return;


    /* LẤY MÀU */

    const colorIndex =
        selectedColors[productId] || 0;


    const color =
        product.colors[
            colorIndex
        ];


    /* LẤY SIZE */

    const size =
        selectedSizes[productId];


    /* KIỂM TRA SIZE */

    if (!size) {

        alert(
            "⚠️ Vui lòng chọn size trước khi mua!"
        );

        return;

    }


    /* MUA THÀNH CÔNG */

    alert(

        "🎉 MUA HÀNG THÀNH CÔNG!\n\n" +

        "🛍️ Sản phẩm: " +
        product.name + "\n" +

        "🎨 Màu: " +
        color.name + "\n" +

        "📏 Size: " +
        size + "\n" +

        "💰 Giá: " +
        product.price.toLocaleString() +
        "đ\n\n" +

        "❤️ Cảm ơn bạn đã mua hàng!\n" +

        "🚚 Đơn hàng sẽ được giao sớm nhất."

    );

}


/* =====================================================
   THÊM SẢN PHẨM CHI TIẾT VÀO GIỎ
===================================================== */

function addDetailToCart() {

    if (!currentProduct) return;


    if (!currentSize) {

        alert(
            "⚠️ Vui lòng chọn size!"
        );

        return;

    }


    const color =
        currentProduct.colors[
            currentColorIndex
        ];


    addToCart(

        currentProduct.name,

        currentProduct.price,

        color.name,

        currentSize

    );


    closeDetail();

}


/* =====================================================
   TÌM KIẾM
===================================================== */

function searchProducts() {

    searchKeyword =
        document.getElementById(
            "searchInput"
        )
        .value
        .toLowerCase()
        .trim();


    renderProducts(
        getFilteredProducts()
    );

}


/* =====================================================
   LỌC DANH MỤC
===================================================== */

function filterCategory(
    category,
    button
) {

    currentCategory =
        category;


    document
        .querySelectorAll(
            ".category-button"
        )
        .forEach(
            item => {

                item.classList.remove(
                    "active"
                );

            }
        );


    if (button) {

        button.classList.add(
            "active"
        );

    }


    renderProducts(
        getFilteredProducts()
    );

}


/* =====================================================
   CUỘN ĐẾN SẢN PHẨM
===================================================== */

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({

            behavior: "smooth"

        });

}


/* =====================================================
   THANH TOÁN GIỎ HÀNG
===================================================== */

function checkout() {

    if (cart.length === 0) {

        alert(
            "🛒 Giỏ hàng đang trống!"
        );

        return;

    }


    let total = 0;


    cart.forEach(
        item => {

            total +=
                item.price *
                item.quantity;

        }
    );


    alert(

        "🎉 MUA HÀNG THÀNH CÔNG!\n\n" +

        "🛍️ Fashion Shop\n" +

        "📦 Số sản phẩm: " +
        cart.length + "\n" +

        "💰 Tổng tiền: " +
        total.toLocaleString() +
        "đ\n\n" +

        "❤️ Cảm ơn bạn đã mua hàng!\n" +

        "🚚 Đơn hàng sẽ được giao sớm nhất."

    );


    cart = [];


    updateCart();


    closeCart();

}


/* =====================================================
   ĐĂNG KÝ HỘI VIÊN
===================================================== */

function registerMember(
    memberType
) {

    if (memberRegistered) {

        alert(

            "💎 BẠN ĐÃ ĐĂNG KÝ HỘI VIÊN!\n\n" +

            "Hạng thành viên: " +
            memberType +

            "\n\nBạn có thể tiếp tục sử dụng " +
            "các ưu đãi dành cho hội viên."

        );

        return;

    }


    memberRegistered = true;


    alert(

        "🎉 ĐĂNG KÝ THÀNH CÔNG!\n\n" +

        "👤 Hạng thành viên: " +
        memberType +

        "\n\n" +

        "🎁 QUYỀN LỢI:\n" +

        "✓ Nhận ưu đãi riêng\n" +

        "✓ Ưu tiên chương trình khuyến mãi\n" +

        "✓ Ưu đãi sinh nhật\n" +

        "✓ Nhận thông báo sản phẩm mới\n\n" +

        "❤️ Cảm ơn bạn đã tham gia Fashion Shop!"

    );

}


/* =====================================================
   CLICK RA NGOÀI MODAL
===================================================== */

window.onclick =
    function(event) {

        const detailModal =
            document.getElementById(
                "detailModal"
            );


        const cartModal =
            document.getElementById(
                "cartModal"
            );


        if (
            event.target ===
            detailModal
        ) {

            closeDetail();

        }


        if (
            event.target ===
            cartModal
        ) {

            closeCart();

        }

    };


/* =====================================================
   KHỞI ĐỘNG WEBSITE
===================================================== */

renderProducts();

updateCart();
