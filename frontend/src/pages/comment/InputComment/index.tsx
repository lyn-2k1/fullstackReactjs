import {
  Avatar,
  Button,
  Comment,
  Form,
  Input,
  List,
  Card,
  AutoComplete,
  Dropdown,
  Menu,
} from 'antd';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import Markdown from 'src/pages/Markdown';
import { toastui } from "@toast-ui/editor";
import DrafJs from 'src/pages/Text';
// import Style from './index.less';
const { TextArea } = Input;

interface CommentItem {
  author: string;
  avatar: string;
  content: React.ReactNode;
  datetime: string;
}

interface EditorProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  submitting: boolean;
  value: string;
  setValue: (value: string) => void;
}

const Editor = ({ onChange, onSubmit, submitting, value, setValue }: EditorProps) => {
  const [options, setOptions] = useState<{ value ?: String }[]>([]);
  const [token, setToken] = useState('');
  const [data, setData] = useState(value || '');
  // const [isShowUser, setShowUser] = useState(false);

  console.log('value', value);
  useEffect(() => {
    setData(value);
  }, [value]);

  // const Users = ListUser.map((name, avatar) => {
  //   return {
  //     value:  <div className={Style.userCompleteItem}>
  //               {/* <Avatar src={avatar}/> */}
  //               <p>{name}</p>
  //             </div>
  //   }
  // })
  // console.log(Users);
  // const [Users, setUsers] = useState([]);

  const handleSearch = (value: string) => {
    console.log('handleSearch', value);
    setData(value);
    setOptions(token.includes('@') ? [...users] : []);
  };

  useEffect(() => {
    setValue(data);
  }, [data]);

  const handleKeyPress = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (ev.key == ' ') {
      setToken('');
    } else {
      setToken(token + ev.key);
    }
    console.log('key+data+token',ev.key, data, token);
  };

  const onSelect = (value: string) => {
    setData(data.replace(token,""));
    setToken('');
    setData((prev) => {
      return prev + value;
    });
    console.log('onSelect', data , value);
  };
  return (
    <>
      <Form.Item>
        <DrafJs/>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
};

const InputComment: React.FC = () => {
  const [comments, setComments] = useState<CommentItem[]>(data);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');

  // const commentsRef = useRef<HTMLDivElement>("null");

  // const scrollToBottom = () => {
  //   const scroll = commentsRef.current?.scrollHeight - commentsRef.current?.clientHeight;
  //   commentsRef.current?.scrollTo(0, scroll);
  // };
 

  const handleSubmit = () => {
    if (!value) return;

    setSubmitting(true);
    setValue('');

    setTimeout(() => {
      setSubmitting(false);
      setValue('');
      setComments([
        ...comments,
        {
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/1',
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ]);
      // scrollToBottom();
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <Comment
      avatar={<Avatar src="https://joeschmoe.io/api/v1/2" alt="Han Solo" />}
      content={
        <Editor
          onChange={handleChange}
          onSubmit={handleSubmit}
          submitting={submitting}
          value={value}
          setValue={setValue}
        />
      }
    />
  );
};

const users = [
  {
    value: 'Hanan',
  },
  {
    value: 'Han Han1',
  },
  {
    value: 'Han han2',
  },
  {
    value: 'Han han3',
  },
  {
    value: 'Han han4',
  },
  {
    value: 'Han han5',
  },
];
const ListUser = [
  {
    name: 'Han Ha',
    avatar: 'https://joeschmoe.io/api/v1/3',
  },
  {
    name: 'Linh',
    avatar: 'https://joeschmoe.io/api/v1/4',
  },
  {
    name: 'Khai Thanh',
    avatar: 'https://joeschmoe.io/api/v1/5',
  },
  {
    name: 'Ha Thanh',
    avatar: 'https://joeschmoe.io/api/v1/6',
  },
  {
    name: 'Mai Ly',
    avatar: 'https://joeschmoe.io/api/v1/7',
  },
  {
    name: 'Nguyen Kien',
    avatar: 'https://joeschmoe.io/api/v1/8',
  },
];

const data = [
  {
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/1',
    content: <p>xin chao</p>,
    datetime: '8/8/2022',
  },
  {
    author: 'Han Han',
    avatar: 'https://joeschmoe.io/api/v1/2',
    content: <p>Chao nhe</p>,
    datetime: '8/8/2022',
  },
  {
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/1',
    content: <p>hihi</p>,
    datetime: '10/8/2022',
  },
  {
    author: 'Han Han',
    avatar: 'https://joeschmoe.io/api/v1/2',
    content: <p>khoe khong</p>,
    datetime: '11/8/2022',
  },
];
export default InputComment;