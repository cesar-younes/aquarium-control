/*
  Copyright (C) 2013-2015  Bryan Hughes <bryan@theoreticalideations.com>

  This file is part of Aquarium Control.

  Aquarium Control is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  Aquarium Control is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with Aquarium Control.  If not, see <http://www.gnu.org/licenses/>.
 */

import dispatcher from 'dispatcher';
import actions from 'actions';

export function createRequestDeleteAction(entryId) {
  dispatcher.dispatch({
    actionType: actions.REQUEST_DELETE,
    entryId
  });
}

export function createDeleteConfirmedAction() {
  dispatcher.dispatch({
    actionType: actions.CONFIRM_DELETE
  });
}

export function createDeleteCancelledAction() {
  dispatcher.dispatch({
    actionType: actions.CANCEL_DELETE
  });
}

export function createRequestEditAction(entryId) {
  dispatcher.dispatch({
    actionType: actions.REQUEST_EDIT,
    entryId
  });
}

export function createEditSavedAction(entryId) {
  dispatcher.dispatch({
    actionType: actions.SAVE_EDIT,
    entryId
  });
}

export function createEditCancelledAction(entryId) {
  dispatcher.dispatch({
    actionType: actions.CANCEL_EDIT,
    entryId
  });
}
