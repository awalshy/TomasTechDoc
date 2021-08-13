---
sidebar_position: 4
---

# Redux

Redux is a shared state for all components. It will re redender widgets according to their dependencies to the state's variables. To control the state's modifications, redux uses functions called reducers.

![Redux life cycle](https://res.cloudinary.com/practicaldev/image/fetch/s--fCDvEpjd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.stack.imgur.com/LNQwH.png "Redux life cycle diagram")

### Actions

Actions are classes that contains the description of the function to modify the state, and the data needed to update the state.

```dart

class UpdateCountAction {
  this.count

  UpdateAction({ count })
}

```

You will use theese actions classes to dispatch actions

```dart
store.dispatch(UpdateCountAction(11))
```

### Reducer

Reducers are the function to modify the state. You **never** modify the state directly. You make a copy to do the changes, then merge the state and the changes.

```dart
final Reducer<List<Model>> countReducer = combineReducers([
  TypedReducer<List<Model>, UpdateGallery>(_updateCount),
]);

List<ImageModel> _updateCount(List<Model> imgs, UpdateCountAction action) => List.unmodifiable(List.from(action.count));
```

Then merge all reducers into one in the appReducer. When an action is dispatched, it will go threw all the middlewares, then will be redirected to the good reducer.

### Middleware

In Flutter, the middlewares will do all the **async** jobs, like getting informations from Firebase.

```dart
void SomeMiddleware(Store<AppState> store, dynamic action, NextDispatcher next) {
  if (action is UpdateCountAction) {
    // do your stuff
  }
  next(action);
}
```

Do not forget to add you middleware in the store. 