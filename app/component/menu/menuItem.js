export default function MENUITEM() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-2xl hover:shadow-black/50">
            <div className="text-center">
                <img src="/pizza.png" alt="pizza" width="100px" height="100px" className="mx-auto"/>
            </div>
            <h4 className="font-semibold my-2">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm">
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malor
            </p>
            <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full">Add to Cart $12</button>
        </div>
    )
}
