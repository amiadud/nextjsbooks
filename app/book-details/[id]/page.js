export const metadata = {
    title: 'Book Details ',
    description: 'Generated by create next app',
}
const page = ({params}) => {

    return (
        <div>
           details page id {params.id}
        </div>
    );
};

export default page;
