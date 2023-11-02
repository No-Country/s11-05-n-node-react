import { useDispatch, useSelector } from "react-redux";
import ListFriends from "../components/HomeComponents/ListFriends";
import RelatedSearch from "../components/HomeComponents/RelatedSearch";
import TeamBuilding from "../components/HomeComponents/TeamBuilding";
import { useEffect } from "react";
import { listMembers } from "../store/state/membersSlice";
import { listCategories } from "../store/state/categorySlice";
const Home = () => {
  const members = useSelector(state => state.members.listMembers);
  const friends = useSelector(state => state.auth.user.friends);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMembers());
    dispatch(listCategories());
  }, []);
  return (
    <>
      <section className="flex flex-col lg:flex-row gap-4 w-full">
        <div className="w-full p-4 text-white">
          <RelatedSearch />
          <TeamBuilding />
        </div>

        <div className="w-full p-4 text-white">
          <h2 className=" font-bold mb-4"> Amigos</h2>
          <ListFriends members={members} friends={friends} />
        </div>
      </section>
    </>
  );
};

export default Home;
