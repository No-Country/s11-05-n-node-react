import { useDispatch, useSelector } from "react-redux";
import ListFriends from "../components/HomeComponents/ListFriends";
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
        <div className="w-full mt-4 px-4 text-white">
          <TeamBuilding />
        </div>

        <div className="w-full mt-4 px-4 text-white">
          <ListFriends members={members} friends={friends} />
        </div>
      </section>
    </>
  );
};

export default Home;
