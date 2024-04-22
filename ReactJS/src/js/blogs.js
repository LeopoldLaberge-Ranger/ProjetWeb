const BlogDetailContext = React.createContext();

function App() {
    const queryParameters = new URLSearchParams(window.location.search)
    const blogId= queryParameters.get('id');

    return <>
        <Header />
        <FetchProvider blogId={blogId}>
            <BlogDetails />
            <CommentList />
            <AddComment />
        </FetchProvider>
        <Footer />
    </>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);