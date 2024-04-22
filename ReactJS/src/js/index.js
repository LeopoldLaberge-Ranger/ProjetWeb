function App() {
    return <>
        <Header />
        <SearchBar />
        <BlogList />
        <Footer />
    </>
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);