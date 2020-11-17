// Hace el fetching de datos using el hoc
import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
