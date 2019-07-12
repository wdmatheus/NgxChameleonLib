interface NumberValue{
  value: Number,
  descrition: string
}

class NumberValues{

  public static readonly All: NumberValue[] = [
    {
      value: 1,
      descrition: 'one'
    },
    {
      value: 2,
      descrition: 'two'
    },
    {
      value: 3,
      descrition: 'three'
    },
    {
      value: 4,
      descrition: 'four'
    },
    {
      value: 5,
      descrition: 'five'
    },
    {
      value: 6,
      descrition: 'six'
    },
    {
      value: 7,
      descrition: 'seven'
    },
    {
      value: 8,
      descrition: 'eight'
    },
    {
      value: 9,
      descrition: 'nine'
    },
    {
      value: 10,
      descrition: 'ten'
    },
    {
      value: 11,
      descrition: 'eleven'
    },
    {
      value: 12,
      descrition: 'twelve'
    },
    {
      value: 13,
      descrition: 'thirteen'

    },
    {
      value: 14,
      descrition: 'fourteen'
    },
    {
      value: 15,
      descrition: 'fifteen'
    },
    {
      value: 16,
      descrition: 'sixteen'
    }
  ];

  public static getDescription(value: Number):  string{
    let entry = this.All.find(x => x.value === value);
    return entry ? entry.descrition : null;
  }

}

export {NumberValue, NumberValues}

