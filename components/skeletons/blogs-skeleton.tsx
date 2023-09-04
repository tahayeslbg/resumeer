import React from "react"

const BlogsSkeleton = () => {
  return (
    <div className="blog_container my-20">
      <div className="flex justify-center px-10 mb-20 lg:px-0 md:px-0 sm:px-0 w-full">
        <div className="w-full flex flex-row gap-x-14 lg:gap-y-5 md:gap-y-5 sm:gap-y-5 lg:items-center md:items-center sm:items-center lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse">
          <div
            id="cardContent"
            className="flex space-y-5 flex-col w-full max-w-[600px]"
          >
            <div
              id="cardInfo"
              className="flex justify-between items-center w-full"
            >
              <div className="flex items-center space-x-3">
                <div
                  id="authorImage"
                  className="w-8 h-8 rounded-full bg-border animate-pulse"
                />
                <div className="flex items-center space-x-3 sm:space-y-3 sm:flex-col sm:space-x-0 sm:items-start">
                  <div
                    id="authorFullName"
                    className="h-1.5 w-10 rounded-full bg-border animate-pulse"
                  />
                  <div className="w-1 h-1 rounded-full bg-primary lg:hidden md:hidden sm:hidden" />
                  <div
                    id="blogDate"
                    className="h-1.5 w-20 rounded-full bg-border animate-pulse"
                  />
                </div>
              </div>
              <div
                id="categoryTitle"
                className="h-1.5 w-12 rounded-full bg-border animate-pulse"
              />
            </div>
            <div id="cardBody" className="w-full flex flex-col space-y-5">
              <div className="flex flex-col space-y-3">
                <div
                  id="blogTitle"
                  className="lg:self-center md:self-center sm:self-center w-2/3 rounded-full h-4 bg-border animate-pulse"
                />
                <div
                  id="blogTitle"
                  className="lg:self-center md:self-center sm:self-center w-1/3 rounded-full h-4 bg-border animate-pulse"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div
                  id="blogDescription"
                  className="w-[60%] rounded-full h-1.5 bg-border animate-pulse lg:self-center md:self-center sm:self-center"
                />
                <div
                  id="blogDescription"
                  className="w-[75%] rounded-full h-1.5 bg-border animate-pulse lg:self-center md:self-center sm:self-center"
                />
                <div
                  id="blogDescription"
                  className="w-[45%] rounded-full h-1.5 bg-border animate-pulse lg:self-center md:self-center sm:self-center"
                />
              </div>
            </div>
          </div>

          <div
            id="cardImage"
            className="w-full max-w-[480px] lg:max-w-[600px] md:max-w-[600px] h-[240px] lg:h-[315px] sm:h-[182px] bg-border rounded-md animate-pulse shrink-0"
          />
        </div>
      </div>

      <div className="flex space-x-12 items-start mb-[100px] lg:mb-6 md:mb-6 sm:mb-6 md:items-center sm:items-center md:space-x-0 sm:space-x-0 md:flex-col sm:flex-col md:space-x-0 sm:space-x-0 md:space-y-6 sm:space-y-6">
        {Array.from({ length: 2 }, (_, i) => i + 1).map((i) => (
          <div
            key={i}
            className="w-full flex flex-col-reverse gap-x-14 gap-y-5 lg:gap-y-5 md:gap-y-5 sm:gap-y-5 lg:items-center md:items-center sm:items-center lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse"
          >
            <div
              id="cardContent"
              className="flex space-y-5 flex-col w-full max-w-[600px]"
            >
              <div
                id="cardInfo"
                className="flex justify-between items-center w-full"
              >
                <div className="flex items-center space-x-3">
                  <div
                    id="authorImage"
                    className="w-8 h-8 rounded-full bg-border animate-pulse"
                  />
                  <div className="flex items-center space-x-3 sm:space-y-3 sm:flex-col sm:space-x-0 sm:items-start">
                    <div
                      id="authorFullName"
                      className="h-1.5 w-10 rounded-full bg-border animate-pulse"
                    />
                    <div className="w-1 h-1 rounded-full bg-primary lg:hidden md:hidden sm:hidden" />
                    <div
                      id="blogDate"
                      className="h-1.5 w-20 rounded-full bg-border animate-pulse"
                    />
                  </div>
                </div>
                <div
                  id="categoryTitle"
                  className="h-1.5 w-12 rounded-full bg-border animate-pulse"
                />
              </div>
              <div id="cardBody" className="w-full flex flex-col space-y-5">
                <div className="flex flex-col space-y-3">
                  <div
                    id="blogTitle"
                    className="w-2/3 rounded-full h-4 bg-border animate-pulse"
                  />
                  <div
                    id="blogTitle"
                    className="w-1/3 rounded-full h-4 bg-border animate-pulse"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <div
                    id="blogDescription"
                    className="w-[60%] rounded-full h-1.5 bg-border animate-pulse lg:self-center"
                  />
                  <div
                    id="blogDescription"
                    className="w-[75%] rounded-full h-1.5 bg-border animate-pulse lg:self-center"
                  />
                  <div
                    id="blogDescription"
                    className="w-[45%] rounded-full h-1.5 bg-border animate-pulse lg:self-center"
                  />
                </div>
              </div>
            </div>

            <div
              id="cardImage"
              className="w-full max-w-[576px] lg:max-w-[600px] md:max-w-[600px] h-[288px] lg:h-[224px] md:h-[288px] sm:h-[182px] bg-border rounded-md animate-pulse shrink-0"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 md:place-items-center sm:place-items-center gap-6 ">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((i) => (
          <div
            key={i}
            className="w-full flex flex-col-reverse gap-x-14 gap-y-5 lg:gap-y-5 md:gap-y-5 sm:gap-y-5 lg:items-center md:items-center sm:items-center lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse"
          >
            <div
              id="cardContent"
              className="flex space-y-5 flex-col w-full max-w-[600px]"
            >
              <div
                id="cardInfo"
                className="flex justify-between items-center w-full"
              >
                <div className="flex items-center space-x-3">
                  <div
                    id="authorImage"
                    className="w-8 h-8 rounded-full bg-border animate-pulse"
                  />
                  <div className="flex items-center space-x-3 sm:space-y-3 sm:flex-col sm:space-x-0 sm:items-start">
                    <div
                      id="authorFullName"
                      className="h-1.5 w-10 rounded-full bg-border animate-pulse"
                    />
                    <div className="w-1 h-1 rounded-full bg-primary lg:hidden md:hidden sm:hidden" />
                    <div
                      id="blogDate"
                      className="h-1.5 w-20 rounded-full bg-border animate-pulse"
                    />
                  </div>
                </div>
                <div
                  id="categoryTitle"
                  className="h-1.5 w-12 rounded-full bg-border animate-pulse"
                />
              </div>
              <div id="cardBody" className="w-full flex flex-col space-y-5">
                <div className="flex flex-col space-y-3">
                  <div
                    id="blogTitle"
                    className="w-2/3 rounded-full h-4 bg-border animate-pulse"
                  />
                  <div
                    id="blogTitle"
                    className="w-1/3 rounded-full h-4 bg-border animate-pulse"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <div
                    id="blogDescription"
                    className="w-[60%] rounded-full h-1.5 bg-border animate-pulse lg:self-center"
                  />
                  <div
                    id="blogDescription"
                    className="w-[75%] rounded-full h-1.5 bg-border animate-pulse lg:self-center"
                  />
                  <div
                    id="blogDescription"
                    className="w-[45%] rounded-full h-1.5 bg-border animate-pulse lg:self-center"
                  />
                </div>
              </div>
            </div>

            <div
              id="cardImage"
              className="w-full max-w-[576px] lg:max-w-[600px] md:max-w-[600px] h-[202px] lg:h-[224px] md:h-[288px] sm:h-[182px] bg-border rounded-md animate-pulse shrink-0"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogsSkeleton
