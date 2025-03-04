import { useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const ProductDetails = () => {
  const selectiveProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: 150,
    description: "This is a stylish jacket perfect for any occasion.",
    brand: "FashionBrand",
    material: "Leather",
    sizes: ["s", "m", "l", "xl"],
    colors: ["Red", "Black"],
    images: [
      {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Stylish Jacket",
      },
      {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Stylish Jacket",
      },
    ],
  };

  const similarProducts = [
    {
      _id: 1,
      name: "Product 1",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
        },
      ],
    },
    {
      _id: 2,
      name: "Product 2",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
        },
      ],
    },
    {
      _id: 3,
      name: "Product 3",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
        },
      ],
    },
    {
      _id: 4,
      name: "Product 1",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
        },
      ],
    },
  ];

  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const handleAddProductToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select the size and color", {
        duration: 1000,
      });
      return;
    }
    setIsBtnDisabled(true);
    setTimeout(() => {
      toast.success("Product added to cart.", {
        duration: 1000,
      });
      setIsBtnDisabled(false);
    }, 2000);
  };

  return (
    <div className="p-6 ">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectiveProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || "Thumbnail"}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Main image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage ? mainImage : selectiveProduct.images[0].url}
                alt={selectiveProduct.images[0].altText}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Mobile Thmbnails */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectiveProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || "Thumbnail"}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Right Section */}
          <div className="md:w-1/2 md:ml-10 ">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectiveProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectiveProduct.originalPrice &&
                `$${selectiveProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2 ">
              $ {selectiveProduct.price}
            </p>
            <p className="text-gray-600 mb-4 ">
              {selectiveProduct.description}
            </p>
            <div className="mb-4 ">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectiveProduct.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color
                        ? "border-4 border-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      background: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                    onClick={() => setSelectedColor(color)}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4 ">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectiveProduct.sizes.map((size) => (
                  <button
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-gray-600"
                    }`}
                    key={size}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gay-700">Quantity</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  disabled={quantity <= 1}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => handleAddProductToCart()}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
                isBtnDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-900"
              }`}
              disabled={isBtnDisabled}
            >
              {isBtnDisabled ? "Adding..." : "ADD TO CART"}
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Charecterstics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody className="">
                  <tr className="">
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectiveProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectiveProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* you also like section */}
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
