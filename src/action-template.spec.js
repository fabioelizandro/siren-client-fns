const actionTemplate = require('./action-template');

describe('action template', () => {
  it('returns the action template from resource that matches the name', () => {
    const sirenResource = {
      class: ['my-resource'],
      actions: [
        {
          name: "add-item",
          method: "POST",
          href: "http://api.x.io/orders/42/items",
          type: "application/x-www-form-urlencoded",
        },
        {
          name: "remove-item",
          method: "DELETE",
          href: "http://api.x.io/orders/42/items",
          type: "application/x-www-form-urlencoded",
        }
      ],
    };

    expect(actionTemplate('add-item')(sirenResource)).toEqual({
      name: "add-item",
      method: "POST",
      href: "http://api.x.io/orders/42/items",
      type: "application/x-www-form-urlencoded",
    });
  });

  it('returns undefined when does not find any action', () => {
    const sirenResource = {
      class: ['my-resource'],
      actions: [
        {
          name: "add-item",
          method: "POST",
          href: "http://api.x.io/orders/42/items",
          type: "application/x-www-form-urlencoded",
        }
      ],
    };

    expect(actionTemplate('remove-item')(sirenResource)).toBeUndefined();
  });
});