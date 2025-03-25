import Image from "next/image"

export default function RealEstateListing() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Description Section */}
        <div className="lg:col-span-6">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Morbi quis habitant donec aliquet interdum. Massa bibendum tellus
            sed ridicules. Fermentum pharetra in lorem eget. Et imperdiet sed ultrices pulvinar ultrices enim. Duis
            fames neque pulvinar in feugiat gravida in. Diam adipiscing sed viverra mauris in lacus. Turpis dignissim
            tincidunt dui urna suspendisse elit consequat purus enim. Morbi mauris nunc sit aliquet. Nec aliquam
            consequat nulla accumsan enim ac ullamcorper.
          </p>
          <p>
            Ut pellentesque lectus auctor aenean urna. Lectus vestibulum sit et cursus volutpat dui commodo erat est.
            Elit leo consectetur amet mattis eget nec. Elit commodo aliquam est at vitae porttitor porta commodo.
            Senectus rhoncus orci quis risus eget massa. Id urna volutpat vulputate neque porttitor nec sit tempor
            porta. Pharetra metus enim vel nibh. Enim pharetra purus neque in blandit quis turpis nullam integer....
          </p>
        </div>

        {/* Featured Listings Section */}
        <div className="lg:col-span-6">
          <h2 className="text-2xl font-bold mb-4">Featured listings</h2>
          <p className="mb-4">Leo morbi faucibus mattis pharetra tellus velit</p>

          <div className="space-y-6">
            {/* Featured Listing 1 */}
            <div className="flex flex-col sm:flex-row gap-4 border-b pb-6">
              <div className="w-full sm:w-1/3">
                <Image
                  src="/assets/images/illustrations/service-items/featured-1.png"
                  alt="Apartment"
                  width={200}
                  height={150}
                  className="rounded-md object-cover w-full h-auto"
                />
              </div>
              <div className="w-full sm:w-2/3">
                <h3 className="font-medium text-lg">New Apartment Nice View</h3>
                <p className="text-sm text-gray-600">Division Road Pembroke Pines</p>
                <p className="font-medium mt-2">15,000 FCFA</p>
              </div>
            </div>

            {/* Featured Listing 2 */}
            <div className="flex flex-col sm:flex-row gap-4 border-b pb-6">
              <div className="w-full sm:w-1/3">
                <Image
                  src="/assets/images/illustrations/service-items/featured-2.png"
                  alt="Apartment"
                  width={200}
                  height={150}
                  className="rounded-md object-cover w-full h-auto"
                />
              </div>
              <div className="w-full sm:w-2/3">
                <h3 className="font-medium text-lg">New Apartment Nice View</h3>
                <p className="text-sm text-gray-600">North Road Piscataway</p>
                <p className="font-medium mt-2">15,000 FCFA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

