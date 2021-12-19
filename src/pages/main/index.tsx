import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {CardList, Loader} from "../../components";

import {getCards} from "../../store/card-list/actions";
import {RootState} from "../../store/store";



const Main = () => {
  const dispatch = useDispatch()
  const {cards} = useSelector((state: RootState) => state.cards)

  console.log(cards)

  useEffect(() => {
    dispatch(getCards())
  }, [])

  return (
    <>
      {
        cards? <CardList/>:<Loader/>
      }
    </>
  )
}

export default Main
