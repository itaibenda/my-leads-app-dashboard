import { Page, Button, Box, Layout, Cell, Card } from '@wix/design-system';

const MyPage = () => <Page height="60vh">
<Page.Header
  title="Basic Info"
  actionsBar={
    <Box gap="SP2">
      <Button skin="inverted">Cancel</Button>
      <Button>Save</Button>
    </Box>
  }
  showBackButton
  onBackClicked={() => {}}
/>
<Page.Content>
  <Layout>
    <Cell>
      <Card>
        <Card.Header title="Program details" />
        <Card.Divider />
        <Card.Content>
          <Box height="420px" />
        </Card.Content>
      </Card>
    </Cell>
    <Cell>
      <Page.Footer divider>
        <Page.Footer.End>
          <Box gap="SP2">
            <Button priority="secondary">Cancel</Button>
            <Button>Save</Button>
          </Box>
        </Page.Footer.End>
      </Page.Footer>
    </Cell>
  </Layout>
</Page.Content>
</Page>;

export default MyPage;
