import BlogItem from "@/components/BlogItem"
import "../../styles/blogs/blogs.css"
export default function Blogs(){
    return(
        <main>
            <div className="blog-listing-secA sec-pad dark_bg">
                <div className="container">
                    <div className="heading content">
                        <h1>Blogs</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quis molestias laborum itaque? Laudantium perspiciatis magni pariatur repudiandae porro optio?</p>
                    </div>
                </div>
            </div>
            <div className="blog-listing-secB dark_bg sec-pad">
                <div className="container">
                    <div className="blog-list-grid common-grid">
                        <BlogItem 
                            imgSrc="/assets/images/other/project1.jpg"
                            date="5 Sep, 2024"
                            desc="How Rising Interest Rates Are Affecting Home Buyers and Sellers"
                        />
                        <BlogItem 
                            imgSrc="/assets/images/other/project1.jpg"
                            date="5 Sep, 2024"
                            desc="How Rising Interest Rates Are Affecting Home Buyers and Sellers"
                        />
                        <BlogItem 
                            imgSrc="/assets/images/other/project1.jpg"
                            date="5 Sep, 2024"
                            desc="How Rising Interest Rates Are Affecting Home Buyers and Sellers"
                        />
                        <BlogItem 
                            imgSrc="/assets/images/other/project1.jpg"
                            date="5 Sep, 2024"
                            desc="How Rising Interest Rates Are Affecting Home Buyers and Sellers"
                        />
                        <BlogItem 
                            imgSrc="/assets/images/other/project1.jpg"
                            date="5 Sep, 2024"
                            desc="How Rising Interest Rates Are Affecting Home Buyers and Sellers"
                        />
                        <BlogItem 
                            imgSrc="/assets/images/other/project1.jpg"
                            date="5 Sep, 2024"
                            desc="How Rising Interest Rates Are Affecting Home Buyers and Sellers"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}