import {IPropertyService, PropertyService} from '../services/propertyservice';
import {Container} from 'inversify'
import {TYPES} from '../start/types';

const container = new Container();
container.bind<IPropertyService>(TYPES.PropertyService).to(PropertyService);

export { container };