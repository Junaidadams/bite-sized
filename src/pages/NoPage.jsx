import Layout from "../components/Layout";
const NoPage = () => {
  return (
    <Layout size={2}>
      <div className="bg-white border border-mainBlack shadow-lg w-full rounded-xl">
        <h1 className="text-black text-4xl font-serif font-black drop-shadow-lg  p-2">
          No page
        </h1>
      </div>
    </Layout>
  );
};

export default NoPage;
