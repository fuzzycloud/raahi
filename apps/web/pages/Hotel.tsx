import { HotelList } from '@raahi/common-web-ui';
export default function Hotel() {
  return (
    <div>
      <section className="grid grid-row-1 justify-items-end p-8 ">
        <div className="btn-group">
          
          <label
            htmlFor="my-modal-3"
            className="btn btn-outline btn-success modal-button"
          >
            {' '}
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
            Sort
          </label>

          <label
            htmlFor="my-modal-4"
            className="btn btn-outline btn-success modal-button"
          >
            <svg
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-filter-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM3.5 5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zM5 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
            </svg>
            Filter
          </label>
        </div>

        {/* sort modal */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            {/* <h3 className="text-lg font-bold p-8">Sort Hotel</h3> */}
            <div className="form-control p-4">
              <label className="label cursor-pointer">
                <span className="label-text">Recommended</span>
                <input type="checkbox" className="checkbox" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Lowest Price</span>
                <input type="checkbox" className="checkbox" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Highest Price</span>
                <input type="checkbox" className="checkbox" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Best Discount(%)</span>
                <input type="checkbox" className="checkbox" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Stars - 1 to 5</span>
                <input type="checkbox" className="checkbox" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Stars - 5 to 1</span>
                <input type="checkbox" className="checkbox" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Near to city center </span>
                <input type="checkbox" className="checkbox" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Near to Airport</span>
                <input type="checkbox" className="checkbox " />
              </label>
            </div>
            <div className="flex justify-center">
              <label
                htmlFor="my-modal-3"
                className="btn border-green-500 bg-green-500 text-center "
              >
                Apply
              </label>
            </div>
          </div>
        </div>

        {/* Filter modal */}
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-4"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            {/* <h3 className="text-lg font-bold">Filter</h3> */}
            <p className="py-4 font-bold text-xl">
              Price
              <div className="divider"></div>
              <input
                type="range"
                min="0"
                max="10000"
                className="range range-xs"
                step="2000"
              />
              <div className="w-full flex justify-between text-xs px-2">
                <span>1000 Rs.</span>
                <span>2000 Rs.</span>
                <span>5000 Rs.</span>
                <span>7000 Rs.</span>
                <span>10000 Rs.</span>
              </div>
            </p>
            <div className="py-4 font-bold text-xl">
              Stars
              <div className="divider"></div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  checked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
            </div>
            <div className="py-4 font-bold text-xl">
              Suggested for
              <div className="divider"></div>
              <label className="label cursor-pointer">
                <span className="label-text">All Travelers</span>
                <input type="checkbox" className="checkbox" />
              </label>
            </div>
            <div className="py-4 font-bold text-xl">
              Accommodation
              <div className="divider"></div>
              <label className="label cursor-pointer">
                <span className="label-text">Hotels</span>
                <input type="checkbox" className="checkbox" />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">Resorts</span>
                <input type="checkbox" className="checkbox" />
              </label>
            </div>
            <div className="flex justify-center">
              <label
                htmlFor="my-modal-4"
                className="btn border-green-500 bg-green-500 text-center "
              >
                Apply
              </label>
            </div>
          </div>
        </div>
      </section>
      <section>
        <HotelList></HotelList>
      </section>
    </div>
  );
}
