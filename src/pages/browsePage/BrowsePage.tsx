import Title from '../../components/title/Title'
import { Button } from 'antd'
import { useAppDispatch } from 'hooks/hooks'
import { loadGenres } from 'reducers/genres'
import { loadCredits } from 'reducers/credits'
import { loadCreditDetails } from 'reducers/creditdetails'
import { mediaType } from 'types/genre'
import { mediaID } from 'types/credit'
import {
  loadCountries,
  loadLanguages,
  loadTimezones,
} from 'reducers/configurations'
import { loadExternal } from 'reducers/external'
import { loadTrending } from 'reducers/trending'
import { trendingMediaType, trendingTime } from 'types/trending'
import { mediaType as mediaTypeFind, mediaID as mediaIDFind } from 'types/find'
import { loadFindID, loadFindQuery } from 'reducers/find'
import { updateAccount, removeAccount, loadAccount } from 'reducers/account'
import {
  MediaTypeDiscover,
  LanguageDiscover,
  YearDiscover,
  GenreDiscover,
  SortByDiscover,
} from 'types/discover'
import { loadDiscover } from 'reducers/discover'
import {
  loadUser,
  loadUsers,
  updateUser,
  removeUser,
  addUser,
} from 'reducers/user'
import {
  loadList,
  loadLists,
  addList,
  updateList,
  removeList,
} from 'reducers/list'
import { loadMovie, loadMovies, addMovie, removeMovie } from 'reducers/movie'

const BrowsePage = () => {
  const dispatch = useAppDispatch()

  const getMovies = (listID: number): void => {
    dispatch(loadMovies(listID))
    console.log('dispatch get movies')
  }

  const getMovie = (movieID: number): void => {
    dispatch(loadMovie(movieID))
    console.log('dispatch get movie')
  }

  const createMovie = (tmdbID: number, listID: number): void => {
    dispatch(addMovie({ tmdbID, listID }))
    console.log('dispatch add movie')
  }

  const deleteMovie = (movieID: number): void => {
    dispatch(removeMovie(movieID))
    console.log('dispatch remove movie')
  }

  const deleteList = (listID: number): void => {
    dispatch(removeList(listID))
    console.log('dispatch remove list')
  }

  const upList = (listTitle: string, listID: number): void => {
    dispatch(updateList({ listTitle, listID }))
    console.log('dispatch update list')
  }

  const createList = (listTitle: string, userID: number): void => {
    dispatch(addList({ listTitle, userID }))
    console.log('dipatch add list')
  }

  const getList = (listID: number): void => {
    dispatch(loadList(listID))
    console.log('dispatch get list')
  }

  const getLists = (userID: number): void => {
    dispatch(loadLists(userID))
    console.log('dispatch get lists')
  }

  const getUser = (userID: number): void => {
    dispatch(loadUser(userID))
    console.log('dispatch get user')
  }
  const postUser = (profile: string, accountID: number): void => {
    dispatch(addUser({ profile, accountID }))
    console.log('dispatch putUser')
  }

  const putUser = (profile: string, userID: number): void => {
    dispatch(updateUser({ profile, userID }))
    console.log('dispatch putUser')
  }
  const deleteUser = (userID: number): void => {
    dispatch(removeUser(userID))
    console.log('dispatch deleteUser')
  }
  const getUsers = (): void => {
    dispatch(loadUsers())
    console.log('dispatch get users')
  }

  const getAccount = (): void => {
    dispatch(loadAccount())
    console.log('dispatch load account')
  }

  const putAccount = (
    password: string,
    firstName: string,
    lastName: string,
  ): void => {
    dispatch(updateAccount({ password, firstName, lastName }))
    console.log('dispatch update account')
  }
  const deleteAccount = (): void => {
    dispatch(removeAccount())
    console.log('dispatch delete account')
  }

  const getGenres = (mediaType: mediaType): void => {
    dispatch(loadGenres(mediaType))
    console.log('dispatch genres')
  }

  const getCredits = (mediaType: mediaType, mediaID: mediaID): void => {
    dispatch(loadCredits({ mediaType, mediaID }))
    console.log('dispatch credits')
  }

  const getCreditDetail = (mediaID: mediaID): void => {
    dispatch(loadCreditDetails(mediaID))
    console.log('dispatch creditdetails')
  }

  const getCountries = (): void => {
    dispatch(loadCountries())
    console.log('dispatch countries')
  }

  const getLanguages = (): void => {
    dispatch(loadLanguages())
    console.log('dispatch Languages')
  }

  const getTimezones = (): void => {
    dispatch(loadTimezones())
    console.log('dispatch Timezones')
  }

  const getExternal = (mediaType: mediaType, mediaID: mediaID): void => {
    dispatch(loadExternal({ mediaType, mediaID }))
    console.log('dispatch External')
  }

  const getTrending = (
    trendingMediaType: trendingMediaType,
    trendingTime: trendingTime,
  ): void => {
    dispatch(loadTrending({ trendingMediaType, trendingTime }))
    console.log('dispatch Trending')
  }

  const getFindID = (mediaType: mediaTypeFind, mediaID: mediaIDFind): void => {
    dispatch(loadFindID({ mediaType, mediaID }))
    console.log('dispatch getFindID')
  }

  const getFindQuery = (
    mediaType: mediaTypeFind,
    mediaID: mediaIDFind,
  ): void => {
    dispatch(loadFindQuery({ mediaType, mediaID }))
    console.log('dispatch getFindQuery')
  }

  const getDiscover = (
    MediaTypeDiscover: MediaTypeDiscover,
    LanguageDiscover: LanguageDiscover,
    YearDiscover: YearDiscover,
    GenreDiscover: GenreDiscover,
    SortByDiscover: SortByDiscover,
  ): void => {
    dispatch(
      loadDiscover({
        MediaTypeDiscover,
        LanguageDiscover,
        YearDiscover,
        GenreDiscover,
        SortByDiscover,
      }),
    )
    console.log('dispatch getDiscover')
  }

  return (
    <>
      <p>BrowsePage</p>
      <Title title="myTitle" level={1} link="/auth/movies" />
      <Button
        type="primary"
        onClick={() =>
          getDiscover('movie', 'en_US', 2001, 28, 'popularity.asc')
        }
      >
        Discover
      </Button>
      <Button type="primary" onClick={() => getFindID('movie', '17302')}>
        Find ID
      </Button>
      <Button type="primary" onClick={() => getFindQuery('movie', 'Alice')}>
        Find Query
      </Button>
      <Button type="primary" onClick={() => getGenres('movie')}>
        Get Movies Genres
      </Button>
      <Button type="primary" onClick={() => getGenres('tv')}>
        Get TV Shows Genres
      </Button>
      <Button type="primary" onClick={() => getCredits('movie', '17302')}>
        Get Movies Credits
      </Button>
      <Button type="primary" onClick={() => getCredits('tv', '115036')}>
        Get TV Shows Credits
      </Button>
      <Button
        type="primary"
        onClick={() => getCreditDetail('52fe47169251416c7508d5c7')}
      >
        Get CreditDetails
      </Button>
      <Button type="primary" onClick={getCountries}>
        Get Countries
      </Button>
      <Button type="primary" onClick={getLanguages}>
        Get Languages
      </Button>
      <Button type="primary" onClick={getTimezones}>
        Get Timezones
      </Button>
      <Button type="primary" onClick={() => getExternal('movie', '17302')}>
        Get Externals
      </Button>
      <Button type="primary" onClick={() => getTrending('movie', 'week')}>
        Get Trending Movie Week
      </Button>
      <Button type="primary" onClick={() => getTrending('movie', 'day')}>
        Get Trending Movie Day
      </Button>
      <Button type="primary" onClick={() => getTrending('tv', 'week')}>
        Get Trending TV Week
      </Button>
      <Button type="primary" onClick={() => getTrending('tv', 'day')}>
        Get Trending TV Day
      </Button>
      <Button type="primary" onClick={() => getTrending('all', 'week')}>
        Get Trending All Week
      </Button>
      <Button type="primary" onClick={() => getTrending('all', 'day')}>
        Get Trending All Day
      </Button>
      <Button type="primary" onClick={() => getAccount()}>
        Get Account
      </Button>
      <Button type="primary" onClick={() => deleteAccount()}>
        Delete Account
      </Button>
      <Button
        type="primary"
        onClick={() => putAccount('test123', 'AntoineUpdated', 'RatatUpdated')}
      >
        Update Account
      </Button>
      <Button type="primary" onClick={() => getUsers()}>
        Get Users
      </Button>
      <Button type="primary" onClick={() => getUser(1)}>
        Get User
      </Button>
      <Button type="primary" onClick={() => deleteUser(20)}>
        Delete User
      </Button>
      <Button type="primary" onClick={() => putUser('fufu', 20)}>
        Update User
      </Button>
      <Button type="primary" onClick={() => postUser('lolo', 1)}>
        Create User
      </Button>
      <Button type="primary" onClick={() => getLists(1)}>
        Get Lists
      </Button>
      <Button type="primary" onClick={() => getList(1)}>
        Get List
      </Button>
      <Button type="primary" onClick={() => createList('NEW LIST AWESOME5', 1)}>
        Add List
      </Button>
      <Button
        type="primary"
        onClick={() => upList('NEW NAME UPDATELOLOLOL', 1)}
      >
        Update List
      </Button>
      <Button type="primary" onClick={() => deleteList(2)}>
        Remove List
      </Button>

      <Button type="primary" onClick={() => getMovies(25)}>
        Get Movies
      </Button>
      <Button type="primary" onClick={() => getMovie(10)}>
        Get Movie
      </Button>
      <Button type="primary" onClick={() => createMovie(666, 12)}>
        Add Movie
      </Button>
      <Button type="primary" onClick={() => deleteMovie(2)}>
        Remove Movie
      </Button>
    </>
  )
}

export default BrowsePage
