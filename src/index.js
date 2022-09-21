import { format} from 'date-fns'
import { domHandler } from './dom'
import {initialProject, retrieveProjArray, testProjects} from './internal' 
import {testStorage} from './storage'

localStorage;
testStorage();
initialProject();
domHandler();
